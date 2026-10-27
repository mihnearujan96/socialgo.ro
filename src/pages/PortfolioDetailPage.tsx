import { Link, useParams } from 'react-router-dom'
import { portfolioProjects } from '@/data/portfolio'
import { weddingPhotos } from '@/data/photography'
import { Button } from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'
import NotFoundPage from './NotFoundPage'

export default function PortfolioDetailPage() {
  const { slug } = useParams()
  const project = portfolioProjects.find((p) => p.slug === slug)

  usePageMeta({
    title: project ? `${project.title} — SocialGo` : 'Proiect — SocialGo',
    description: project?.summary ?? 'Studiu de caz SocialGo',
    path: project ? `/portofoliu/${project.slug}` : '/portofoliu',
  })

  if (!project) return <NotFoundPage />

  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Link to="/portofoliu" className="text-sm text-muted hover:text-accent">
          ← Înapoi la portofoliu
        </Link>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          {project.categoryLabel}
          {project.status === 'placeholder' ? ' · Placeholder' : ''}
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{project.summary}</p>

        <div
          className="mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] border border-border"
          style={
            project.coverImage
              ? {
                  backgroundImage: `url(${project.coverImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : { background: `linear-gradient(145deg, ${project.coverTone}, #08090B)` }
          }
        />

        {project.category === 'photography' && (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {weddingPhotos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">Provocare</h2>
            <p className="mt-3 text-muted leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl">Scope</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {project.scope.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-2xl">Deliverables</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.deliverables.map((item) => (
              <li key={item} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {project.status === 'placeholder' && (
          <p className="mt-10 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            Acest studiu de caz este un placeholder de dezvoltare. Nu reprezintă un client real până
            la înlocuirea cu proiecte verificate.
          </p>
        )}

        <Button to="/contact" className="mt-10">
          Hai să construim ceva similar
        </Button>
      </div>
    </article>
  )
}
