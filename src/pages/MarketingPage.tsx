import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { marketingServices } from '@/data/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function MarketingPage() {
  usePageMeta({
    title: 'Reels & marketing — SocialGo',
    description:
      'Reels, social media și campanii. Un reel de la 300 lei; la volume mai mari, prețul pe bucată scade.',
    path: '/marketing',
  })

  return (
    <>
      <PageHero
        eyebrow="03 · Reels & marketing"
        title={'CONȚINUT CARE SE\nOPREȘTE ÎN FEED.'}
        description="Reels, postări și campanii pentru firme care vor atenție reală — fără cifre inventate."
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
            Vezi prețurile pentru Reels și restul pachetelor pe pagina de prețuri. Ai și un
            calculator pe pagina principală.
          </p>
          <Button href="/#pricing" className="mt-6">
            Vezi prețurile
          </Button>
        </div>
      </section>
    </>
  )
}
