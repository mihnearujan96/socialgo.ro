import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { contactInfo } from '@/data/contact'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function AboutPage() {
  usePageMeta({
    title: 'Despre — SocialGo',
    description: 'Mihnea Rujan și SocialGo: unde ingineria întâlnește creativitatea vizuală.',
    path: '/despre',
  })

  return (
    <>
      <PageHero
        eyebrow="About"
        title={'INGINERIE ÎNTÂLNEȘTE\nCREATIVITATEA.'}
        description="SocialGo este un studio de creative technology construit în jurul unei idei simple: brandurile merită atât produs digital solid, cât și povești vizuale autentice."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-muted leading-relaxed">
            <p>
              Sunt Mihnea Rujan — inginer cu apucături de fotograf și videograf. Am crescut într-un
              loc plin de povești și am învățat să apreciez autenticitatea momentelor dintre oameni.
            </p>
            <p>
              SocialGo unește software engineering, web development, marketing digital, fotografie,
              videografie și producție drone. Lucrăm cu afaceri, evenimente și branduri personale.
            </p>
            <p>
              Nu promitem miracole de marketing și nu inventăm premii. Construim lucruri clare,
              frumoase și utile — apoi le facem să se simtă.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button to="/contact">Hai să vorbim</Button>
              <Button href={contactInfo.photographySite} variant="outline" target="_blank" rel="noreferrer">
                mihnearujan.ro
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Profil</p>
              <p className="mt-4 font-display text-3xl">Mihnea Rujan</p>
              <p className="mt-2 text-sm text-muted">Founder · Creative Technology</p>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Locație</dt>
                  <dd>România / Europa</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Email</dt>
                  <dd>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Telefon</dt>
                  <dd>
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-accent">
                      {contactInfo.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
