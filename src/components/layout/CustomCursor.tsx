import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { isFinePointer } from '@/lib/utils'

type CursorLabel = '' | 'VIEW' | 'DRAG' | 'EXPLORE'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState<CursorLabel>('')
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 })

  useEffect(() => {
    if (!isFinePointer()) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = (e.target as HTMLElement | null)?.closest?.('[data-cursor]') as HTMLElement | null
      const raw = (target?.dataset.cursor ?? '').toUpperCase() as CursorLabel
      setLabel(raw === 'VIEW' || raw === 'DRAG' || raw === 'EXPLORE' ? raw : '')
      setActive(Boolean(target) || Boolean((e.target as HTMLElement)?.closest?.('a,button')))
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      aria-hidden
    >
      <div
        className={`flex items-center justify-center rounded-full border border-white/80 transition-all duration-300 ${
          active || label ? 'h-16 w-16 bg-white/10' : 'h-3 w-3 bg-white'
        }`}
      >
        {label && (
          <span className="font-mono text-[9px] tracking-[0.2em] text-white">{label}</span>
        )}
      </div>
    </motion.div>
  )
}
