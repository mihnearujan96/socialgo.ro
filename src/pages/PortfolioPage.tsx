import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/ui/PageHero'
import { portfolioFilters, portfolioProjects, type PortfolioCategory } from '@/data/portfolio'
import { usePageMeta } from '@/hooks/usePageMeta'
import { contactInfo } from '@/data/contact'

export default function PortfolioPage() {
  const [filter, setFilter] = useState<PortfolioCategory>('all')

  usePageMeta({
    title: 'Portofoliu — SocialGo',
    description: 'Proiecte SocialGo: development, marketing, fotografie, video, drone și hospitality.',
    path: '/portofoliu',
  })

  const projects = useMemo(
    () => (filter === 'all' ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Portofoliu"
        title={'CÂTEVA DINTRE\nPROIECTELE NOASTRE.'}
        description="Adăugăm aici lucrări reale pe măsură ce le publicăm. Dacă ai un proiect, scrie-ne pe WhatsApp."
        ctaHref={`https://wa.me/${contactInfo.whatsapp}`}
        ctaLabel="Propune un proiect"
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] ${
                filter === f.id ? 'border-accent text-accent' : 'border-border text-muted'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => {
            const isSiteCard = Boolean(project.url)
            const hasMedia = Boolean(project.coverImage || project.coverVideo)

            return (
              <Link
                key={project.slug}
                to={`/portofoliu/${project.slug}`}
                className={`group relative overflow-hidden rounded-[2rem] border border-border ${
                  isSiteCard
                    ? 'flex flex-col bg-bg-secondary'
                    : i % 3 === 0
                      ? 'md:row-span-1 min-h-[320px]'
                      : 'min-h-[280px]'
                }`}
                data-cursor="view"
                style={
                  project.coverImage && !isSiteCard && !project.coverVideo
                    ? {
                        backgroundImage: `linear-gradient(180deg, rgba(8,9,11,0.15), rgba(8,9,11,0.92)), url(${project.coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: project.coverPosition ?? 'center',
                      }
                    : isSiteCard || hasMedia
                      ? undefined
                      : { background: `linear-gradient(145deg, ${project.coverTone}, #08090B)` }
                }
              >
                {isSiteCard && project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt=""
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                )}

                {!isSiteCard && project.coverVideo && (
                  <>
                    <video
                      src={project.coverVideo}
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  </>
                )}

                {!isSiteCard && (
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(199,255,61,0.15),transparent_50%)]" />
                )}

                <div
                  className={
                    isSiteCard
                      ? 'flex flex-col p-6 md:p-8'
                      : 'absolute inset-0 flex flex-col justify-end p-6 md:p-8'
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl">{project.title}</h2>
                  <p className="mt-2 max-w-md text-sm text-muted">{project.summary}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
