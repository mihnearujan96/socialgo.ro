import { MessageCircle, Mail, Phone } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/ui/ContactForm'
import { contactInfo } from '@/data/contact'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta({
    title: 'Contact — SocialGo',
    description: 'Trimite un brief către SocialGo. Email mihnearujan@gmail.com · Tel +40 756 322 681',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={'AI O IDEE?\nHAI SĂ O FACEM REALITATE.'}
        description="Completează formularul sau scrie-ne direct. Răspundem pe email, telefon sau WhatsApp."
        ctaTo="/contact"
        ctaLabel="Completează formularul"
        tone="from-accent/10"
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5 space-y-6">
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-muted hover:text-accent">
            <Mail className="h-4 w-4 text-accent" />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-muted hover:text-accent">
            <Phone className="h-4 w-4 text-accent" />
            {contactInfo.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-muted hover:text-accent"
          >
            <MessageCircle className="h-4 w-4 text-accent" />
            WhatsApp
          </a>
          <p className="text-sm text-muted pt-4">{contactInfo.locationNote}</p>
          <p className="text-xs text-muted">
            Datele din formular sunt folosite doar pentru a răspunde solicitării. Nu vindem date
            personale.
          </p>
        </div>
        <div className="md:col-span-7 rounded-[2rem] border border-border bg-bg-secondary p-6 md:p-8">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
