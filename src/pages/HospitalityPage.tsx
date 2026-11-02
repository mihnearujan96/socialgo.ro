import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { hospitalityBundle } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'
import { contactInfo } from '@/data/contact'

export default function HospitalityPage() {
  usePageMeta({
    title: 'Soluții pentru business — SocialGo',
    description:
      'Site, aplicații, foto, video, drone și social media — un pachet pe măsură pentru firma ta.',
    path: '/hoteluri-business',
  })

  return (
    <>
      <PageHero
        eyebrow="07 · Pentru firme"
        title={'MAI MULT DECÂT\nUN SITE SIMPLU.'}
        description="Putem lega site-ul, conținutul și producția vizuală într-un pachet potrivit obiectivelor tale."
        ctaHref={`https://wa.me/${contactInfo.whatsapp}`}
        ctaLabel="Hai să vorbim pe WhatsApp"
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
          <Button href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </Button>
          <Button href="/#pricing" variant="outline">
            Vezi prețurile
          </Button>
        </div>
      </section>
    </>
  )
}
