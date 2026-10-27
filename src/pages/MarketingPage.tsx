import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { marketingServices } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function MarketingPage() {
  usePageMeta({
    title: 'Digital Marketing — SocialGo',
    description: 'Social media, Reels, campanii creative. Producție Reels de la 350 RON. Pachete lunare pe ofertă.',
    path: '/marketing',
  })

  return (
    <>
      <PageHero
        eyebrow="03 · Digital Marketing"
        title={'CONTENT CARE ATRAGE.\nSTRATEGIE CARE CONTEAZĂ.'}
        description="Conținut vizual, Reels și poziționare de brand pentru business-uri care vor atenție reală."
        tone="from-violet/15"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-[2rem] border border-border bg-bg-secondary p-6 md:p-8">
          <h2 className="font-display text-3xl">Prețuri</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Reels, campanii și restul pachetelor sunt afișate pe carduri în secțiunea unică de prețuri.
          </p>
          <Button href="/#pricing" className="mt-6">
            Vezi prețurile
          </Button>
        </div>
      </section>
    </>
  )
}
