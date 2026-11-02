import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, MessageCircle, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { mainNav, serviceMenu } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'

const waHref = `https://wa.me/${contactInfo.whatsapp}`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname, location.hash])

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

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Navigare principală">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm tracking-wide text-muted transition-colors hover:text-text"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Servicii
                <ChevronDown className={cn('h-3.5 w-3.5 transition', servicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,720px)] -translate-x-1/2 rounded-3xl border border-border/80 bg-bg/95 p-5 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="grid gap-6 sm:grid-cols-3">
                      {serviceMenu.map((group) => (
                        <div key={group.group}>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                            {group.group}
                          </p>
                          <ul className="mt-3 space-y-1">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                {item.path.includes('#') ? (
                                  <a
                                    href={item.path}
                                    className="block rounded-xl px-2 py-2 hover:bg-surface"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <span className="block text-sm text-text">{item.label}</span>
                                    <span className="block text-xs text-muted">{item.hint}</span>
                                  </a>
                                ) : (
                                  <Link
                                    to={item.path}
                                    className="block rounded-xl px-2 py-2 hover:bg-surface"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <span className="block text-sm text-text">{item.label}</span>
                                    <span className="block text-xs text-muted">{item.hint}</span>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 border-t border-border/70 pt-4">
                      <a
                        href="/#servicii-home"
                        className="text-sm text-muted hover:text-accent"
                        onClick={() => setServicesOpen(false)}
                      >
                        Vezi toate serviciile →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainNav
              .filter((item) => item.label !== 'Servicii')
              .map((item) =>
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
            <Button
              href={waHref}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="!px-5 !py-2.5 text-xs uppercase tracking-[0.14em]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
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
                Categorii
              </p>
              <div className="mt-4 space-y-6">
                {serviceMenu.map((group) => (
                  <div key={group.group}>
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">{group.group}</p>
                    <div className="grid gap-1">
                      {group.items.map((item) =>
                        item.path.includes('#') ? (
                          <a
                            key={item.label}
                            href={item.path}
                            className="rounded-2xl px-3 py-3 text-sm text-muted hover:bg-surface hover:text-text"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="rounded-2xl px-3 py-3 text-sm text-muted hover:bg-surface hover:text-text"
                          >
                            {item.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button href={waHref} target="_blank" rel="noreferrer" className="mt-8 w-full">
                <MessageCircle className="h-4 w-4" />
                Scrie pe WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
