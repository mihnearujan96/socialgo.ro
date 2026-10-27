import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { webDevServices } from '@/data/services'

export function DevWorld() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[#070b08] py-24 md:py-32" id="development">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(199,255,61,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(199,255,61,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          Secțiune · Development
        </div>
        <SectionHeading
          number="01"
          eyebrow="Web Development"
          title={'NU FACEM DOAR WEBSITE-URI.\nCONSTRUIM EXPERIENȚE DIGITALE.'}
          description="De la landing pages la aplicații web complexe — arhitectură curată, UI premium, performanță."
        />

        <ul className="mt-12 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
          {webDevServices.map((item) => (
            <li
              key={item}
              className="mb-3 break-inside-avoid text-sm text-muted before:mr-2 before:text-accent before:content-['—']"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/web-development">Detalii web development</Button>
          <Button href="/#pricing" variant="outline">
            Vezi prețurile
          </Button>
        </div>
      </div>
    </section>
  )
}
