import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { videoServices } from '@/data/services'

export function VideoWorld() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[#090b12] py-24 md:py-32" id="videografie">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/assets/videos/showreel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-bg" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-violet">
          Secțiune · Video
        </div>
        <SectionHeading
          number="05"
          eyebrow="Videography"
          title={'POVEȘTI CARE\nMERITĂ SĂ FIE VĂZUTE.'}
          description="Filme de nuntă, promoții de business, brand films și conținut pe format scurt."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {videoServices.map((item, i) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <p className="font-mono text-[10px] text-accent">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-3 text-sm">{item}</p>
            </div>
          ))}
        </div>

        <Button to="/videografie" className="mt-10">
          Explorează videografia
        </Button>
      </div>
    </section>
  )
}
