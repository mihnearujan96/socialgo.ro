import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { videoServices } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function VideographyPage() {
  usePageMeta({
    title: 'Videografie — SocialGo',
    description: 'Filme de nuntă, video promoțional, brand films și Reels. Producție cinematică în România.',
    path: '/videografie',
  })

  return (
    <>
      <PageHero
        eyebrow="05 · Videography"
        title={'POVEȘTI CARE\nMERITĂ SĂ FIE VĂZUTE.'}
        description="De la filme de eveniment la conținut comercial — ritm, atmosferă, montaj atent."
        tone="from-violet/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border">
          <video
            className="aspect-video w-full object-cover bg-bg-secondary"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/assets/videos/showreel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {videoServices.map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-surface p-5 text-sm">
              {item}
            </div>
          ))}
        </div>

        <Button to="/contact" className="mt-10">
          Discută un proiect video
        </Button>
      </section>
    </>
  )
}
