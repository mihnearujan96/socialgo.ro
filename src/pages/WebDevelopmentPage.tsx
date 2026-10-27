import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { webDevServices } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function WebDevelopmentPage() {
  usePageMeta({
    title: 'Web Development — SocialGo',
    description: 'Site-uri și experiențe digitale. Starter de la 200 €. Business 400–500 €. Aplicații custom pe ofertă.',
    path: '/web-development',
  })

  return (
    <>
      <PageHero
        eyebrow="01 · Web Development"
        title={'NU FACEM DOAR WEBSITE-URI.\nCONSTRUIM EXPERIENȚE DIGITALE.'}
        description="Business websites, landing pages, corporate sites și mentenanță — construite pentru claritate și conversie."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="font-display text-3xl">Ce construim</h2>
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
            Toate pachetele (web, marketing, foto, drone) sunt grupate pe carduri într-o singură secțiune.
          </p>
          <Button href="/#pricing" className="mt-6">
            Vezi prețurile
          </Button>
        </div>
      </section>
    </>
  )
}
