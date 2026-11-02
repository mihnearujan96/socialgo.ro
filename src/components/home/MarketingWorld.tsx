import { useMemo, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { marketingServices } from '@/data/services'
import { reelsMaxCount, reelsUnitPrice, reelsTotal } from '@/data/pricing'
import { contactInfo } from '@/data/contact'

const reels = [
  {
    title: 'Atenție',
    caption: 'Primele secunde',
    src: '/assets/videos/reels/reel-01.mp4',
  },
  {
    title: 'Poveste',
    caption: 'Mesajul principal',
    src: '/assets/videos/reels/reel-02.mp4',
  },
  {
    title: 'Ofertă',
    caption: 'Ce vrei să vinzi',
    src: '/assets/videos/reels/reel-03.mp4',
  },
]

function ReelsCalculator() {
  const [count, setCount] = useState(3)
  const unit = useMemo(() => reelsUnitPrice(count), [count])
  const total = useMemo(() => reelsTotal(count), [count])
  const saved = 300 * count - total

  return (
    <div className="mt-16 overflow-hidden rounded-[2rem] border border-violet/25 bg-gradient-to-br from-violet/10 via-surface/80 to-bg p-6 md:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet">
            Calculator Reels
          </p>
          <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
            Câte Reels vrei?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            De la <span className="text-text">300 lei / reel</span>. Dacă iei mai multe, prețul pe
            bucată scade.
          </p>
        </div>

        <div className="grid w-full max-w-md grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-border/80 bg-bg/50 px-3 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Reels</p>
            <p className="mt-1 font-display text-2xl tabular-nums">{count}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-bg/50 px-3 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">/ reel</p>
            <p className="mt-1 font-display text-2xl tabular-nums text-accent">{unit}</p>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/10 px-3 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Total</p>
            <p className="mt-1 font-display text-2xl tabular-nums">{total}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between text-xs text-muted">
          <span>1</span>
          <span className="font-mono uppercase tracking-[0.18em]">Volum</span>
          <span>{reelsMaxCount}</span>
        </div>
        <input
          type="range"
          min={1}
          max={reelsMaxCount}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="reels-range w-full"
          aria-label="Număr de Reels"
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            {saved > 0 ? (
              <>
                Economisești{' '}
                <span className="font-medium text-accent">{saved} lei</span> față de prețul de bază.
              </>
            ) : (
              <>Un reel costă 300 lei. La volum, prețul pe bucată scade.</>
            )}
          </p>
          <Button
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
              `Bună! Vreau ${count} ${count === 1 ? 'reel' : 'reels'} — total estimat ${total} lei.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            Comandă {count} {count === 1 ? 'reel' : 'reels'}
          </Button>
        </div>
      </div>

      <ul className="mt-8 grid gap-2 border-t border-border/60 pt-6 text-xs text-muted sm:grid-cols-2 lg:grid-cols-5">
        {[
          { n: '1', p: '300 lei' },
          { n: '2–3', p: '285 lei / reel' },
          { n: '4–6', p: '270 lei / reel' },
          { n: '7–12', p: '255 lei / reel' },
          { n: '13+', p: '240 lei / reel' },
        ].map((tier) => (
          <li
            key={tier.n}
            className="flex items-center justify-between rounded-xl border border-border/50 bg-bg/40 px-3 py-2"
          >
            <span>{tier.n} Reels</span>
            <span className="font-mono text-text">{tier.p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

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
          eyebrow="Reels & marketing"
          title={'CONȚINUT CARE SE\nOPREȘTE ÎN FEED.'}
          description="Reels, postări și campanii pe social media. Fără cifre inventate — cu mesaj clar și livrare la timp."
        />

        <div className="mt-14 flex gap-4 overflow-x-auto pb-4 snap-x">
          {reels.map((reel) => (
            <article
              key={reel.title}
              className="group relative snap-center shrink-0 w-[180px] md:w-[210px] aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black"
              data-cursor="view"
            >
              <video
                src={reel.src}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Reel
                </span>
                <div>
                  <p className="font-display text-2xl">{reel.title}</p>
                  <p className="mt-1 text-xs text-white/60">{reel.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <ReelsCalculator />

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((item) => (
            <li key={item} className="rounded-2xl border border-border/80 bg-surface/50 px-4 py-3 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/#pricing">Vezi prețurile</Button>
        </div>
      </div>
    </section>
  )
}
