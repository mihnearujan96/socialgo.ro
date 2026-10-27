import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageLoader } from './PageLoader'
import { CustomCursor } from './CustomCursor'
import { SmoothScroll } from './SmoothScroll'
import { ScrollProgress } from './ScrollProgress'
import { PageTransition } from './PageTransition'

export function Layout() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <SmoothScroll>
      <PageLoader visible={loading} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="min-h-screen">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
