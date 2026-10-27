import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'mark'
  onClick?: () => void
}

export function Logo({ className, variant = 'full', onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn('inline-flex shrink-0 items-center', className)}
      aria-label="SocialGo — acasă"
    >
      <img
        src="/brand/logo-primary.png"
        alt="SocialGo"
        className={
          variant === 'mark'
            ? 'h-12 w-auto object-contain object-left'
            : 'h-14 w-auto max-w-[min(78vw,340px)] object-contain object-left sm:h-16 sm:max-w-[380px] lg:h-[64px] lg:max-w-[420px]'
        }
      />
    </Link>
  )
}
