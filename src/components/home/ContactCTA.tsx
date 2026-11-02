import { Button } from '@/components/ui/Button'
import { contactInfo } from '@/data/contact'
import { MessageCircle } from 'lucide-react'

const waHref = `https://wa.me/${contactInfo.whatsapp}`

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg py-24 md:py-32" id="contact-home">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,255,61,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">Contact</p>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl">
          AI UN PROIECT?
          <br />
          SCRIE-NE PE WHATSAPP.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          Fără formular. Ne spui pe scurt ce ai nevoie — nuntă, botez, reels, site — și îți răspundem
          cu pașii următori.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={waHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp · {contactInfo.phoneDisplay}
          </Button>
          <Button href={`tel:${contactInfo.phone}`} variant="outline">
            Sună acum
          </Button>
        </div>
      </div>
    </section>
  )
}
