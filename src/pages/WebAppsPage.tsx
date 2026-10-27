import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

const items = [
  'Platforme de rezervări și booking',
  'Dashboard-uri de management',
  'Aplicații React custom',
  'Integrări API',
  'Fluxuri de business automatizate',
  'Soluții pentru hoteluri și restaurante',
]

export default function WebAppsPage() {
  usePageMeta({
    title: 'Aplicații Web — SocialGo',
    description: 'Aplicații web custom, booking, dashboard-uri și fluxuri de business. Ofertă personalizată.',
    path: '/aplicatii-web',
  })

  return (
    <>
      <PageHero
        eyebrow="02 · Web Applications"
        title={'SOFTWARE CARE LUCREAZĂ\nPENTRU AFACEREA TA.'}
        description="Construim aplicații web pe măsură — de la rezervări la panouri interne — cu UX clar și arhitectură solidă."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-bg-secondary p-6">
              <p className="font-display text-xl">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-muted">
          Un proiect tipic de aplicație custom pornește, orientativ, în jurul a 2.000 € — prețul final
          depinde de complexitate și se stabilește după consultație.
        </p>
        <Button to="/contact" className="mt-8">
          Solicită o ofertă
        </Button>
      </section>
    </>
  )
}
