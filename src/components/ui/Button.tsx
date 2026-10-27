import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface BaseProps {
  children: ReactNode
  className?: string
  variant?: Variant
  magnetic?: boolean
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined }

type ButtonAsLink = BaseProps & { to: string; href?: undefined; onClick?: () => void }

type ButtonAsAnchor = BaseProps & { href: string; to?: undefined; target?: string; rel?: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent-dim font-medium shadow-[0_0_0_1px_rgba(199,255,61,0.2)]',
  secondary: 'bg-surface text-text border border-border hover:border-accent/40',
  ghost: 'bg-transparent text-text hover:text-accent',
  outline: 'border border-border text-text hover:border-accent hover:text-accent bg-transparent',
}

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
    variants[variant],
    className,
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick} data-cursor="explore">
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        data-cursor="explore"
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} data-cursor="explore" {...rest}>
      {children}
    </button>
  )
}
