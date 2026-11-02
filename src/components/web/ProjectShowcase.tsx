import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { PortfolioProject } from '@/data/portfolio'

function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#efeae2]">
      {project.coverImage && (
        <img
          src={project.coverImage}
          alt={`${project.title} pe desktop`}
          className="h-full w-full object-cover object-top"
        />
      )}
      {project.mobileImage && (
        <img
          src={project.mobileImage}
          alt={`${project.title} pe telefon`}
          className="absolute right-3 bottom-0 h-[88%] w-auto max-w-[30%] rounded-t-2xl border border-black/10 object-cover object-top shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:right-6"
        />
      )}
    </div>
  )
}

function ProjectCopy({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex flex-col justify-center p-6 md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{project.categoryLabel}</p>
      <h3 className="mt-3 font-display text-3xl md:text-4xl">{project.title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.url && (
          <Button href={project.url} target="_blank" rel="noreferrer">
            Vezi site-ul
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        )}
        <Button to={`/portofoliu/${project.slug}`} variant="outline">
          Detalii
        </Button>
      </div>
    </div>
  )
}

export function ProjectShowcase({ projects }: { projects: PortfolioProject[] }) {
  if (projects.length === 0) return null

  if (projects.length === 1) {
    const project = projects[0]
    return (
      <article className="grid overflow-hidden rounded-[2rem] border border-border bg-bg-secondary lg:grid-cols-[1.2fr_0.8fr]">
        <ProjectVisual project={project} />
        <ProjectCopy project={project} />
      </article>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <article key={project.slug} className="overflow-hidden rounded-[2rem] border border-border bg-bg-secondary">
          <ProjectVisual project={project} />
          <ProjectCopy project={project} />
        </article>
      ))}
    </div>
  )
}
