import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroDevices } from '@/components/home/HeroDevices'
import { preferReducedMotion } from '@/lib/utils'

const keywords = ['CODE', 'CREATE', 'CAPTURE', 'GROW'] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const reduced = preferReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % keywords.length), 2200)
    return () => window.clearInterval(id)
  }, [reduced])

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden grain px-5 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(128,128,255,0.14),transparent_50%),radial-gradient(ellipse_at_15%_85%,rgba(199,255,61,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-5 md:grid-cols-12 md:gap-10">
        {/* Devices */}
        <div className="order-1 flex justify-center md:order-2 md:col-span-6 md:justify-end">
          {!reduced ? <HeroDevices /> : null}
        </div>

        {/* Copy */}
        <div className="order-2 text-center md:order-1 md:col-span-6 md:text-left">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-accent md:mb-5 md:tracking-[0.35em]">
            Creative Technology Studio · România
          </p>

          <h1 className="font-display text-6xl leading-[1.05] tracking-[-0.03em] sm:text-7xl md:text-7xl lg:text-[6.75rem]">
            <span className="block text-text">WE</span>
            <span className="mt-1 grid text-accent">
              <span className="invisible col-start-1 row-start-1 select-none" aria-hidden>
                CAPTURE
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={keywords[index]}
                  className="col-start-1 row-start-1 block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  {keywords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-5 font-display text-xl text-text/90 sm:text-2xl md:mt-6 md:text-2xl lg:text-3xl">
            Construim digital. Creăm impact. Capturăm emoții.
          </p>

          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted md:mx-0 md:mt-4 md:max-w-lg">
            Development, marketing și producție vizuală. Un singur studio pentru ideile care merită
            să iasă în evidență.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mx-auto sm:max-w-sm md:mx-0 md:mt-8 md:max-w-none md:flex-row md:flex-wrap">
            <Button to="/servicii" className="w-full md:w-auto">
              Explorează serviciile
              <ArrowDownRight className="h-4 w-4" />
            </Button>
            <Button href="/#pricing" variant="outline" className="w-full md:w-auto">
              Vezi prețurile
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
