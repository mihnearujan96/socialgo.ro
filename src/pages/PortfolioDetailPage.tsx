import { Link, useParams } from 'react-router-dom'
import { portfolioProjects } from '@/data/portfolio'
import { weddingPhotos } from '@/data/photography'
import { Button } from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'
import NotFoundPage from './NotFoundPage'
import { contactInfo } from '@/data/contact'

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
          {project.status === 'placeholder' ? ' · Exemplu' : ''}
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{project.summary}</p>

        {project.coverImage && project.mobileImage ? (
          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-[#efeae2] sm:aspect-[16/8]">
            <img
              src={project.coverImage}
              alt={`${project.title} pe desktop`}
              className="h-full w-full object-cover object-top"
            />
            <img
              src={project.mobileImage}
              alt={`${project.title} pe telefon`}
              className="absolute right-3 bottom-0 h-[88%] w-auto max-w-[34%] rounded-t-2xl border border-black/10 object-cover object-top shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:right-8"
            />
          </div>
        ) : project.coverVideo ? (
          <video
            src={project.coverVideo}
            className="mt-12 aspect-[16/9] w-full rounded-[2rem] border border-border object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        ) : project.coverImage ? (
          <img
            src={project.coverImage}
            alt=""
            className="mt-12 aspect-[16/9] w-full rounded-[2rem] border border-border object-cover"
            style={{ objectPosition: project.coverPosition ?? 'center' }}
          />
        ) : null}

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

        {project.category === 'marketing' && (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              '/assets/videos/reels/reel-01.mp4',
              '/assets/videos/reels/reel-02.mp4',
              '/assets/videos/reels/reel-03.mp4',
            ].map((src) => (
              <video
                key={src}
                src={src}
                className="aspect-[9/16] w-full rounded-2xl border border-border object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
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
            Exemplu de structură pentru portofoliu. Nu este încă un proiect publicat al unui client.
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          {project.url && (
            <Button href={project.url} target="_blank" rel="noreferrer">
              Vezi site-ul
            </Button>
          )}
          <Button
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            variant={project.url ? 'outline' : 'primary'}
          >
            Vreau un proiect asemănător
          </Button>
        </div>
      </div>
    </article>
  )
}
