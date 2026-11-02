import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { contactInfo } from '@/data/contact'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function AboutPage() {
  usePageMeta({
    title: 'Despre — SocialGo',
    description:
      'SocialGo e o echipă: site-uri, aplicații, marketing, foto și video pentru afaceri și evenimente.',
    path: '/despre',
  })

  return (
    <>
      <PageHero
        eyebrow="Despre"
        title={'DE LA IDEE\nLA LUCRU GATA.'}
        description="Facem site-uri, conținut și foto-video pentru oameni și firme care vor rezultate clare, fără povești umflate."
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-muted leading-relaxed">
            <p>
              SocialGo e o echipă. Facem site-uri, aplicații, Reels, marketing, fotografie, video și
              filmări cu drona pentru firme, evenimente și branduri personale.
            </p>
            <p>
              Îți spunem ce se poate face, cât costă și cine se ocupă. Apoi lucrăm.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                Scrie pe WhatsApp
              </Button>
              <Button
                href={contactInfo.photographySite}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                mihnearujan.ro
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Echipa</p>
              <p className="mt-4 font-display text-3xl">SocialGo</p>
              <p className="mt-2 text-sm text-muted">Site-uri, foto, video și drone — împreună.</p>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Locație</dt>
                  <dd>România</dd>
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
