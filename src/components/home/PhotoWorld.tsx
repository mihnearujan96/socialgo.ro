import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { photoCategories } from '@/data/services'
import { weddingPhotos } from '@/data/photography'
import { contactInfo } from '@/data/contact'

export function PhotoWorld() {
  return (
    <section className="relative border-t border-border bg-black py-24 md:py-32" id="fotografie">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,245,243,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          Secțiune · Fotografie
        </div>
        <SectionHeading
          number="04"
          eyebrow="Photography"
          title={'EMOȚII REALE.\nAMINTIRI CARE RĂMÂN.'}
          description="Nunți, evenimente, portrete și branding — fotografiate de Mihnea Rujan."
        />

        <div className="mt-12">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">Nunți</p>
          <div className="grid gap-4 md:grid-cols-3">
            {weddingPhotos.map((photo) => (
              <figure
                key={photo.id}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10"
                data-cursor="view"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {photoCategories.map((cat) => (
            <span key={cat} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-muted">
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/fotografie">Vezi fotografia</Button>
          <Button href={contactInfo.photographySite} variant="outline" target="_blank" rel="noreferrer">
            Portofoliu Mihnea Rujan
          </Button>
        </div>
      </div>
    </section>
  )
}
