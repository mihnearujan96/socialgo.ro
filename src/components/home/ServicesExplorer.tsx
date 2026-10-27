import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Camera,
  Code2,
  LayoutDashboard,
  Megaphone,
  Plane,
  Briefcase,
  Clapperboard,
  Sparkles,
} from 'lucide-react'
import { servicesNav } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ReactNode } from 'react'

const icons: Record<string, ReactNode> = {
  web: <Code2 className="h-6 w-6" />,
  apps: <LayoutDashboard className="h-6 w-6" />,
  marketing: <Megaphone className="h-6 w-6" />,
  photo: <Camera className="h-6 w-6" />,
  video: <Clapperboard className="h-6 w-6" />,
  drone: <Plane className="h-6 w-6" />,
  hospitality: <Briefcase className="h-6 w-6" />,
  branding: <Sparkles className="h-6 w-6" />,
}

export function ServicesExplorer() {
  return (
    <section className="relative border-t border-border bg-bg-secondary py-24 md:py-32" id="servicii-home">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          number="00"
          eyebrow="Servicii"
          title={'IDEI DIFERITE.\nUN SINGUR STUDIO.'}
          description="Alege disciplina — sau combină-le. Fiecare secțiune duce la pagina dedicată."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {servicesNav.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <Link
                to={service.path}
                className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-30px_rgba(199,255,61,0.45)]"
                data-cursor="explore"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border text-accent transition group-hover:border-accent/40 group-hover:bg-accent/10"
                    style={{ color: service.accent }}
                  >
                    {icons[service.id]}
                  </span>
                  <span className="font-mono text-xs text-muted">{service.number}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
                  Explorează
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
