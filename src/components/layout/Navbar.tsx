import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { mainNav } from '@/data/navigation'
import { servicesNav } from '@/data/services'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || open ? 'bg-bg/80 backdrop-blur-xl border-b border-border/60' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:h-24 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigare principală">
            {mainNav.map((item) =>
              item.path.includes('#') ? (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-sm tracking-wide text-muted transition-colors hover:text-text accent-underline"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'text-sm tracking-wide text-muted transition-colors hover:text-text accent-underline',
                      isActive && 'text-text',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" className="!py-2.5 !px-5 text-xs uppercase tracking-[0.14em]">
              Hai să vorbim
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg pt-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-10">
              <nav className="mt-6 space-y-2" aria-label="Meniu mobil">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {item.path.includes('#') ? (
                      <a
                        href={item.path}
                        className="block border-b border-border/70 py-4 font-display text-3xl"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="block border-b border-border/70 py-4 font-display text-3xl"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                Lumi de servicii
              </p>
              <div className="mt-4 grid gap-2">
                {servicesNav.map((s) => (
                  <Link
                    key={s.id}
                    to={s.path}
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-muted hover:bg-surface hover:text-text"
                  >
                    <span className="font-mono text-accent">{s.number}</span>
                    {s.title}
                  </Link>
                ))}
              </div>

              <Button to="/contact" className="mt-8 w-full">
                Contactează-ne
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
