import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { droneServices } from '@/data/services'
import { droneNote } from '@/data/pricing'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function DronePage() {
  usePageMeta({
    title: 'Producție Drone — SocialGo',
    description: 'Fotografie și filmare aeriană pentru turism, imobiliare și business. Piloți certificați EASA.',
    path: '/drona',
  })

  return (
    <>
      <PageHero
        eyebrow="06 · Drone"
        title={'O NOUĂ PERSPECTIVĂ\nASUPRA LUMII.'}
        description="Cadre aeriene cinematice, acolo unde zborul este permis și condițiile o permit."
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
        <Button to="/contact" className="mt-8">
          Cere o ofertă drone
        </Button>
      </section>
    </>
  )
}
