import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { servicesNav } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta({
    title: 'Servicii — SocialGo',
    description: 'Web development, aplicații, marketing, fotografie, video, drone și soluții pentru hospitality.',
    path: '/servicii',
  })

  return (
    <>
      <PageHero
        eyebrow="Servicii"
        title={'OPT LUMI.\nO SINGURĂ ECHIPĂ.'}
        description="Alege disciplina potrivită — sau combină-le într-un pachet complet pentru brandul tău."
        tone="from-violet/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="divide-y divide-border">
          {servicesNav.map((s) => (
            <Link
              key={s.id}
              to={s.path}
              className="group flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between"
              data-cursor="explore"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-sm text-accent">{s.number}</span>
                <div>
                  <h2 className="font-display text-3xl md:text-5xl group-hover:text-accent transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-muted">{s.short}</p>
                </div>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted transition group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
