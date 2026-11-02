import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function AboutTeaser() {
  return (
    <section className="border-t border-border bg-bg py-24 md:py-32" id="despre-home">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <SectionHeading
            number="09"
            eyebrow="Despre"
            title={'CINE SUNTEM\nÎN SPATELE SOCIALGO.'}
          />
          <p className="mt-6 max-w-xl text-muted leading-relaxed">
            În spatele SocialGo e o echipă. Facem site-uri, aplicații, conținut, foto și video
            pentru firme și evenimente.
          </p>
          <Button to="/despre" variant="outline" className="mt-8">
            Citește mai mult
          </Button>
        </div>

        <div className="md:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface aspect-[4/5] md:aspect-auto md:min-h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(199,255,61,0.15),transparent_45%),linear-gradient(160deg,#171A20,#08090B)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Echipa</p>
              <p className="mt-2 font-display text-3xl">SocialGo</p>
              <p className="mt-2 text-sm text-muted">
                Site-uri, aplicații, foto, video și drone.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 font-mono text-[10px] text-muted">
                <div className="rounded-xl border border-border p-3">SITE-URI</div>
                <div className="rounded-xl border border-border p-3">APLICAȚII</div>
                <div className="rounded-xl border border-border p-3">FOTO & VIDEO</div>
                <div className="rounded-xl border border-border p-3">DRONE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
