import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { droneServices } from '@/data/services'
import { droneNote } from '@/data/pricing'
import { usePageMeta } from '@/hooks/usePageMeta'
import { contactInfo } from '@/data/contact'

export default function DronePage() {
  usePageMeta({
    title: 'Filmări cu drona — SocialGo',
    description:
      'Fotografie și filmare aeriană pentru turism, imobiliare și business. Piloți certificați EASA.',
    path: '/drona',
  })

  return (
    <>
      <PageHero
        eyebrow="06 · Drone"
        title={'CADRE AERIENE,\nUNDE SE POATE.'}
        description="Cadre aeriene acolo unde zborul este permis și vremea ține cu noi."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {droneServices.map((item) => (
            <li key={item} className="rounded-2xl border border-border bg-bg-secondary px-5 py-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm text-muted">{droneNote}</p>
        <Button
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8"
        >
          Cere o ofertă pe WhatsApp
        </Button>
      </section>
    </>
  )
}
