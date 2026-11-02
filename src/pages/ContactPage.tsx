import { MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { contactInfo } from '@/data/contact'
import { usePageMeta } from '@/hooks/usePageMeta'

const waHref = `https://wa.me/${contactInfo.whatsapp}`

export default function ContactPage() {
  usePageMeta({
    title: 'Contact — SocialGo',
    description: `Scrie pe WhatsApp: ${contactInfo.phoneDisplay}. Răspundem rapid pentru nunți, reels, site-uri și evenimente.`,
    path: '/contact',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={'SCRIE-NE DIRECT\nPE WHATSAPP.'}
        description="Fără formular. Un mesaj scurt e de ajuns — îți răspundem cu pașii următori."
        ctaHref={waHref}
        ctaLabel="Deschide WhatsApp"
        tone="from-accent/10"
      />
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <div className="rounded-[2rem] border border-border bg-bg-secondary p-8 text-center md:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            Răspuns rapid
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Hai să vorbim</h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Spune-ne pe scurt ce ai nevoie — nuntă, botez, reels, site sau alt proiect — și îți
            trimitem oferta.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={waHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              WhatsApp · {contactInfo.phoneDisplay}
            </Button>
            <Button href={`tel:${contactInfo.phone}`} variant="outline" className="w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Sună-mă
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">{contactInfo.locationNote}</p>
        </div>
      </section>
    </>
  )
}
