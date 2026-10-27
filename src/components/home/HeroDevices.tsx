import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { preferReducedMotion } from '@/lib/utils'

function LaptopSVG() {
  return (
    <svg viewBox="0 0 420 280" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="mbBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8eaed" />
          <stop offset="45%" stopColor="#c5c9d0" />
          <stop offset="100%" stopColor="#9aa0a8" />
        </linearGradient>
        <linearGradient id="mbScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171a20" />
          <stop offset="100%" stopColor="#0c0e12" />
        </linearGradient>
        <linearGradient id="mbGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c7ff3d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8080ff" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path d="M48 28h324c10 0 18 8 18 18v148c0 4-3 7-7 7H37c-4 0-7-3-7-7V46c0-10 8-18 18-18z" fill="url(#mbBody)" />
      <rect x="58" y="40" width="304" height="148" rx="4" fill="url(#mbScreen)" />
      <rect x="72" y="52" width="276" height="16" rx="3" fill="#1e222b" />
      <rect x="72" y="78" width="120" height="10" rx="2" fill="#c7ff3d" />
      <rect x="72" y="98" width="180" height="7" rx="2" fill="#3a404c" />
      <rect x="72" y="118" width="110" height="58" rx="6" fill="#1e222b" />
      <rect x="196" y="118" width="110" height="58" rx="6" fill="url(#mbGlow)" opacity="0.85" />
      <path d="M20 208h380c8 0 12 6 10 12l-8 28c-2 6-8 10-14 10H32c-6 0-12-4-14-10l-8-28c-2-6 2-12 10-12z" fill="url(#mbBody)" />
      <rect x="150" y="214" width="120" height="8" rx="2" fill="#8b919a" />
    </svg>
  )
}

function CameraSVG() {
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="camBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a2f38" />
          <stop offset="100%" stopColor="#12151b" />
        </linearGradient>
        <radialGradient id="camGlass" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#d8e0ff" />
          <stop offset="45%" stopColor="#6b78d6" />
          <stop offset="100%" stopColor="#1a1d40" />
        </radialGradient>
      </defs>
      <rect x="18" y="36" width="150" height="100" rx="16" fill="url(#camBody)" />
      <rect x="140" y="48" width="42" height="78" rx="10" fill="#0e1014" />
      <rect x="34" y="22" width="100" height="20" rx="6" fill="#1e222b" />
      <circle cx="58" cy="32" r="10" fill="#3a414d" />
      <circle cx="58" cy="32" r="4" fill="#c7ff3d" />
      <circle cx="110" cy="28" r="6" fill="#c7ff3d" />
      <circle cx="88" cy="86" r="42" fill="#2f3540" />
      <circle cx="88" cy="86" r="34" fill="#1a1d24" stroke="#c7ff3d" strokeWidth="3" />
      <circle cx="88" cy="86" r="24" fill="url(#camGlass)" />
      <circle cx="78" cy="76" r="6" fill="#fff" opacity="0.45" />
    </svg>
  )
}

function DroneSVG() {
  return (
    <svg viewBox="0 0 260 180" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="droneBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0f2f5" />
          <stop offset="100%" stopColor="#b8bec8" />
        </linearGradient>
      </defs>
      <g stroke="#2f3540" strokeWidth="8" strokeLinecap="round">
        <line x1="50" y1="45" x2="210" y2="135" />
        <line x1="210" y1="45" x2="50" y2="135" />
      </g>
      {[
        [50, 45],
        [210, 45],
        [50, 135],
        [210, 135],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" fill="#c7ff3d" opacity="0.2" />
          <circle cx={x} cy={y} r="10" fill="#1a1d24" />
          <rect x={x - 28} y={y - 3} width="56" height="6" rx="3" fill="#c7ff3d" opacity="0.85" />
          <rect x={x - 3} y={y - 28} width="6" height="56" rx="3" fill="#d4ff6a" opacity="0.7" />
        </g>
      ))}
      <rect x="95" y="70" width="70" height="40" rx="12" fill="url(#droneBody)" />
      <rect x="110" y="78" width="40" height="14" rx="4" fill="#1e222b" />
      <circle cx="130" cy="98" r="5" fill="#c7ff3d" />
      <circle cx="146" cy="98" r="4" fill="#ff5a5a" />
      <rect x="118" y="112" width="24" height="18" rx="4" fill="#1a1d24" />
      <circle cx="130" cy="130" r="8" fill="#3a414d" />
      <circle cx="130" cy="130" r="4" fill="#8080ff" />
    </svg>
  )
}

const devices = [
  { id: 'laptop', label: 'Development', node: <LaptopSVG /> },
  { id: 'camera', label: 'Fotografie', node: <CameraSVG /> },
  { id: 'drone', label: 'Drone', node: <DroneSVG /> },
] as const

export function HeroDevices() {
  const [active, setActive] = useState(0)
  const reduced = preferReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % devices.length), 3200)
    return () => window.clearInterval(id)
  }, [reduced])

  const current = devices[active]

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative h-44 w-64 sm:h-52 sm:w-80 md:h-64 md:w-[26rem] lg:h-80 lg:w-[32rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {current.node}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {devices.map((d, i) => (
          <button
            key={d.id}
            type="button"
            aria-label={d.label}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-6 bg-accent' : 'w-1.5 bg-white/25'
            }`}
          />
        ))}
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
        {current.label}
      </p>
    </div>
  )
}
