import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { hospitalityBundle } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function HospitalityPage() {
  usePageMeta({
    title: 'Business — SocialGo',
    description:
      'Soluții digitale pentru business: website, aplicații, foto, video, drone și social media.',
    path: '/hoteluri-business',
  })

  return (
    <>
      <PageHero
        eyebrow="07 · Business"
        title={'AFACEREA TA MERITĂ MAI MULT\nDECÂT UN SIMPLU WEBSITE.'}
        description="Website, conținut și producție vizuală — un pachet adaptat afacerii tale și obiectivelor pe care le ai."
        ctaLabel="Hai să vorbim despre proiectul tău"
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <ul className="grid gap-3 md:grid-cols-2">
          {hospitalityBundle.map((item, i) => (
            <li key={item} className="flex gap-4 rounded-2xl border border-border px-5 py-4">
              <span className="font-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/contact">Solicită o ofertă</Button>
          <Button href="/#pricing" variant="outline">
            Vezi prețurile
          </Button>
        </div>
      </section>
    </>
  )
}
