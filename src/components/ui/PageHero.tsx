import { Button } from './Button'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  ctaTo?: string
  ctaLabel?: string
  className?: string
  tone?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaTo = '/contact',
  ctaLabel = 'Solicită o ofertă',
  className,
  tone = 'from-accent/10',
}: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-40 md:pb-28', className)}>
      <div className={cn('absolute inset-0 bg-gradient-to-br to-transparent', tone)} />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl sm:text-5xl md:text-7xl whitespace-pre-line">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{description}</p>
        <Button to={ctaTo} className="mt-10">
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}
