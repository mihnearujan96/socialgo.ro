import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { hospitalityBundle } from '@/data/services'

export function HospitalityWorld() {
  return (
    <section className="relative border-t border-border bg-bg-secondary py-24 md:py-32" id="business">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          Secțiune · Business
        </div>
        <SectionHeading
          number="07"
          eyebrow="Business"
          title={'AFACEREA TA MERITĂ MAI MULT\nDECÂT UN SIMPLU WEBSITE.'}
          description="Construim pachetul potrivit pentru afacerea ta: site, conținut, foto, video și drone — în funcție de ce ai nevoie."
        />

        <ul className="mt-14 grid gap-3 md:grid-cols-2">
          {hospitalityBundle.map((item, i) => (
            <li key={item} className="flex items-start gap-4 rounded-2xl border border-border bg-bg px-5 py-4">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>

        <Button to="/hoteluri-business" className="mt-10">
          Hai să vorbim despre proiectul tău
        </Button>
      </div>
    </section>
  )
}
