import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { droneServices } from '@/data/services'
import { droneNote } from '@/data/pricing'

export function DroneWorld() {
  return (
    <section className="relative border-t border-border bg-[#071016] py-24 md:py-32" id="drona">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(199,255,61,0.25) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          Secțiune · Drone
        </div>

        <SectionHeading
          number="06"
          eyebrow="Drone Production"
          title={'O NOUĂ PERSPECTIVĂ\nASUPRA LUMII.'}
          description="Cadre aeriene pentru turism, imobiliare și business — unde zborul este legal și sigur."
        />

        <ul className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {droneServices.map((item) => (
            <li key={item} className="rounded-2xl border border-accent/15 bg-surface/40 px-5 py-4 text-sm">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm text-muted">{droneNote}</p>

        <Button to="/drona" variant="outline" className="mt-8">
          Servicii drone
        </Button>
      </div>
    </section>
  )
}
