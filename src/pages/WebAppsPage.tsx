import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { ProjectShowcase } from '@/components/web/ProjectShowcase'
import { portfolioByShowcase } from '@/data/portfolio'
import { usePageMeta } from '@/hooks/usePageMeta'
import { contactInfo } from '@/data/contact'

const items = [
  'Platforme de rezervări',
  'Panouri de administrare',
  'Aplicații web pe măsură',
  'Aplicații mobile',
  'Integrări cu alte sisteme',
  'Automatizări pentru firmă',
  'Soluții pentru hoteluri și restaurante',
]

export default function WebAppsPage() {
  usePageMeta({
    title: 'Aplicații web — SocialGo',
    description:
      'Aplicații web și mobile de la 1.500 €: rezervări, panouri interne și fluxuri pentru firmă.',
    path: '/aplicatii-web',
  })

  return (
    <>
      <PageHero
        eyebrow="02 · Aplicații web"
        title={'APLICAȚII CARE\nTE AJUTĂ LA MUNCĂ.'}
        description="Construim aplicații pe procesul tău — de la rezervări la panouri interne — ușor de folosit și stabile."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="font-display text-3xl">Aplicație web</h2>
        <p className="mt-3 max-w-2xl text-muted">
          O platformă publică, cu fluxuri pentru oameni și pentru cei care lucrează în ea.
        </p>
        <div className="mt-8">
          <ProjectShowcase projects={portfolioByShowcase('app')} />
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-bg-secondary p-6">
              <p className="font-display text-xl">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-muted">
          Aplicațiile web și mobile pornesc de la 1.500 €. Prețul final depinde de complexitate și îl
          stabilim după ce vorbim.
        </p>
        <Button
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8"
        >
          Scrie pe WhatsApp
        </Button>
      </section>
    </>
  )
}
