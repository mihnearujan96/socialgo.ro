import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { marketingServices } from '@/data/services'

const reels = [
  { title: 'Hook', tone: 'from-violet/50 to-bg' },
  { title: 'Story', tone: 'from-accent/30 to-bg' },
  { title: 'Offer', tone: 'from-fuchsia-500/30 to-bg' },
  { title: 'CTA', tone: 'from-sky-400/30 to-bg' },
]

export function MarketingWorld() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[#0c0b16] py-24 md:py-32" id="marketing">
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-violet">
          Secțiune · Marketing
        </div>
        <SectionHeading
          number="03"
          eyebrow="Digital Marketing"
          title={'CONTENT CARE ATRAGE.\nSTRATEGIE CARE CONTEAZĂ.'}
          description="Social media, Reels și campanii creative — fără statistici inventate, cu focus pe mesaj și consistență."
        />

        <div className="mt-14 flex gap-4 overflow-x-auto pb-4 snap-x">
          {reels.map((reel) => (
            <article
              key={reel.title}
              className={`snap-center shrink-0 w-[180px] md:w-[210px] aspect-[9/16] rounded-[1.75rem] border border-white/10 bg-gradient-to-b ${reel.tone} p-4 flex flex-col justify-between`}
              data-cursor="view"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Reel</span>
              <div>
                <p className="font-display text-2xl">{reel.title}</p>
                <p className="mt-1 text-xs text-white/60">Vertical storytelling</p>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((item) => (
            <li key={item} className="rounded-2xl border border-border/80 bg-surface/50 px-4 py-3 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/marketing" variant="outline">
            Explorează marketing
          </Button>
          <Button href="/#pricing">Vezi prețurile</Button>
        </div>
      </div>
    </section>
  )
}
