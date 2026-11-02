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
    if (loading) return

    if (!location.hash) {
      window.__socialgoLenis?.scrollTo(0, { immediate: true })
      window.scrollTo(0, 0)
      return
    }

    const id = location.hash.replace('#', '')
    let cancelled = false
    const scrollToHash = () => {
      if (cancelled) return
      const el = document.getElementById(id)
      if (!el) return
      const lenis = window.__socialgoLenis
      if (lenis) {
        lenis.resize()
        lenis.scrollTo(el.getBoundingClientRect().top + lenis.scroll - 24, { immediate: true })
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const t1 = window.setTimeout(scrollToHash, 60)
    const t2 = window.setTimeout(scrollToHash, 450)
    return () => {
      cancelled = true
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [location.pathname, location.hash, loading])

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
