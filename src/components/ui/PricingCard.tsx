import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './Button'
import type { PricingPackage } from '@/data/pricing'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  pkg: PricingPackage
  ctaTo?: string
}

export function PricingCard({ pkg, ctaTo = '/contact' }: PricingCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <article
      className={cn(
        'rounded-3xl border p-6 md:p-8 transition-colors',
        pkg.highlight
          ? 'border-accent/40 bg-surface shadow-[0_0_40px_-20px_rgba(199,255,61,0.35)]'
          : 'border-border bg-bg-secondary',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{pkg.name}</p>
          <p className="mt-3 font-display text-3xl md:text-4xl text-text">{pkg.price}</p>
          {pkg.note && <p className="mt-1 text-sm text-muted">{pkg.note}</p>}
        </div>
        {pkg.highlight && (
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
            Popular
          </span>
        )}
      </div>

      <p className="mt-5 text-muted leading-relaxed">{pkg.description}</p>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-between border-t border-border pt-4 text-sm text-text"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>Detalii pachet</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pb-2 pt-4">
              {pkg.details.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

      <Button to={ctaTo} variant={pkg.highlight ? 'primary' : 'outline'} className="mt-6 w-full">
        Solicită o ofertă
      </Button>
    </article>
  )
}
