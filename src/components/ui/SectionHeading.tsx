import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  number?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center mx-auto', 'max-w-4xl', className)}>
      {(number || eyebrow) && (
        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted font-mono">
          {number && <span className="text-accent">{number}</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
