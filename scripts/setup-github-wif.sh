#!/usr/bin/env bash
#
# One-time setup: provision Workload Identity Federation so GitHub Actions can
# deploy to Firebase Hosting WITHOUT a service-account key. This mirrors the
# keyless setup already used by the yana-portfolio and ukrainianrestoration
# projects (and works despite the org's iam.disableServiceAccountKeyCreation
# policy, because WIF creates no keys).
#
# Prerequisites: gcloud CLI installed and authenticated as an owner/editor of
# the project (run `gcloud auth login` first). Run this from the repo root:
#
#     bash scripts/setup-github-wif.sh
#
# When it finishes it patches the __WIF_PROVIDER__ placeholder in the two
# workflow files with the real provider resource string. Then commit & push.

set -euo pipefail

PROJECT_ID="kozakadjusting-e76a3"
REPO="gregreda37/kozakadjusting"
POOL_ID="github-pool"
PROVIDER_ID="github-provider"
SA_NAME="github-deploy"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

echo "==> Project: ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}" >/dev/null

PROJECT_NUMBER="$(gcloud projects describe "${PROJECT_ID}" --format='value(projectNumber)')"
echo "==> Project number: ${PROJECT_NUMBER}"

echo "==> Enabling required APIs (idempotent)…"
gcloud services enable \
  iam.googleapis.com \
  iamcredentials.googleapis.com \
  sts.googleapis.com \
  cloudresourcemanager.googleapis.com \
  firebasehosting.googleapis.com

echo "==> Ensuring deploy service account exists…"
if ! gcloud iam service-accounts describe "${SA_EMAIL}" >/dev/null 2>&1; then
  gcloud iam service-accounts create "${SA_NAME}" \
    --display-name="GitHub Actions deploy (Firebase Hosting)"
else
  echo "    (already exists)"
fi

echo "==> Granting Hosting deploy roles to the service account…"
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/firebasehosting.admin" \
  --condition=None >/dev/null
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/serviceusage.serviceUsageConsumer" \
  --condition=None >/dev/null

echo "==> Ensuring Workload Identity Pool exists…"
if ! gcloud iam workload-identity-pools describe "${POOL_ID}" \
     --location=global >/dev/null 2>&1; then
  gcloud iam workload-identity-pools create "${POOL_ID}" \
    --location=global \
    --display-name="GitHub Actions pool"
else
  echo "    (already exists)"
fi

echo "==> Ensuring OIDC provider exists (restricted to ${REPO})…"
if ! gcloud iam workload-identity-pools providers describe "${PROVIDER_ID}" \
     --location=global --workload-identity-pool="${POOL_ID}" >/dev/null 2>&1; then
  gcloud iam workload-identity-pools providers create-oidc "${PROVIDER_ID}" \
    --location=global \
    --workload-identity-pool="${POOL_ID}" \
    --display-name="GitHub provider" \
    --issuer-uri="https://token.actions.githubusercontent.com" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
    --attribute-condition="assertion.repository=='${REPO}'"
else
  echo "    (already exists)"
fi

echo "==> Allowing the repo to impersonate the service account…"
gcloud iam service-accounts add-iam-policy-binding "${SA_EMAIL}" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/attribute.repository/${REPO}" \
  >/dev/null

PROVIDER_RESOURCE="projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/providers/${PROVIDER_ID}"

echo ""
echo "==> WIF provider resource:"
echo "    ${PROVIDER_RESOURCE}"

echo "==> Patching workflow files…"
for WF in .github/workflows/deploy.yml .github/workflows/preview.yml; do
  if [ -f "${WF}" ]; then
    sed -i.bak "s#__WIF_PROVIDER__#${PROVIDER_RESOURCE}#g" "${WF}" && rm -f "${WF}.bak"
    echo "    patched ${WF}"
  fi
done

echo ""
echo "Done. Now commit and push:"
echo "    git add .github/workflows && git commit -m 'Wire WIF provider into deploy workflows' && git push"
