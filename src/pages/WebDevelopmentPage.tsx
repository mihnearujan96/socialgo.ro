import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { ProjectShowcase } from '@/components/web/ProjectShowcase'
import { portfolioByShowcase } from '@/data/portfolio'
import { webDevServices } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function WebDevelopmentPage() {
  usePageMeta({
    title: 'Site-uri web — SocialGo',
    description:
      'Site-uri de prezentare de la 200 €. Site business 400–500 €. Aplicații web și mobile de la 1.500 €.',
    path: '/web-development',
  })

  return (
    <>
      <PageHero
        eyebrow="01 · Site-uri web"
        title={'SITE-URI CLARE,\nGATA DE FOLOSIT.'}
        description="Pagini de prezentare, site-uri pentru firme și mentenanță — făcute să se înțeleagă ușor pe telefon și pe computer."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="font-display text-3xl">Site de prezentare</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Un site public, făcut să se citească la fel de clar pe telefon și pe computer.
        </p>
        <div className="mt-8">
          <ProjectShowcase projects={portfolioByShowcase('presentation')} />
        </div>

        <h2 className="mt-16 font-display text-3xl">Ce pot face</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {webDevServices.map((item) => (
            <li key={item} className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-[2rem] border border-border bg-bg-secondary p-6 md:p-8">
          <h2 className="font-display text-3xl">Prețuri</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Toate pachetele — site-uri, marketing, foto, drone — sunt pe pagina de prețuri.
          </p>
          <Button href="/#pricing" className="mt-6">
            Vezi prețurile
          </Button>
        </div>
      </section>
    </>
  )
}
