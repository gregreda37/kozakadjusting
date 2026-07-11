import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PublicAdjusters from './pages/PublicAdjusters'
import WaterFireDamage from './pages/WaterFireDamage'
import Reconstruction from './pages/Reconstruction'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
        </div>
      </div>
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </section>
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageTransition({ children }) {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(t)
  }, [pathname])

  return (
    <div className={`page-transition${visible ? ' page-transition--in' : ''}`}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/public-adjusters" element={<PublicAdjusters />} />
            <Route path="/water-fire-damage" element={<WaterFireDamage />} />
            <Route path="/reconstruction" element={<Reconstruction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
