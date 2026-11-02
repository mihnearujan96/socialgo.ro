import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/ui/PricingCard'
import { Button } from '@/components/ui/Button'
import { contactInfo } from '@/data/contact'
import {
  webPricing,
  marketingPricing,
  photoPricing,
  droneNote,
  type PricingPackage,
} from '@/data/pricing'

const waHref = `https://wa.me/${contactInfo.whatsapp}`

type CategoryId = 'all' | 'web' | 'marketing' | 'photo' | 'drone'

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Toate' },
  { id: 'web', label: 'Site-uri & aplicații' },
  { id: 'marketing', label: 'Reels & marketing' },
  { id: 'photo', label: 'Nunți & evenimente' },
  { id: 'drone', label: 'Drone' },
]

const groups: {
  id: Exclude<CategoryId, 'all'>
  title: string
  packages: PricingPackage[]
  note?: string
}[] = [
  {
    id: 'web',
    title: 'Site-uri & aplicații web',
    packages: webPricing,
    note: 'Prețurile pentru aplicații personalizate sunt indicative și se stabilesc după discuție.',
  },
  {
    id: 'marketing',
    title: 'Reels & marketing',
    packages: marketingPricing,
    note: 'Campaniile lunare și managementul continuu se ofertează personalizat.',
  },
  {
    id: 'photo',
    title: 'Nunți, botezuri & evenimente',
    packages: photoPricing,
    note: 'Pentru alte tipuri de evenimente, prețul se stabilește în funcție de nevoie.',
  },
  {
    id: 'drone',
    title: 'Filmări cu drona',
    packages: [
      {
        id: 'drone-start',
        name: 'Sesțiune aeriană',
        price: 'ofertă personalizată',
        description:
          'Fotografie și filmare aeriană pentru business, turism, imobiliare sau evenimente — unde zborul este permis.',
        details: [
          'Briefing și verificare zone de zbor',
          'Fotografie / filmare aeriană',
          'Livrare material editat sau brut, după acord',
        ],
        highlight: true,
      },
    ],
    note: droneNote,
  },
]

export function PricingSection() {
  const [filter, setFilter] = useState<CategoryId>('all')
  const visible = filter === 'all' ? groups : groups.filter((g) => g.id === filter)

  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          number="08"
          eyebrow="Prețuri"
          title={'PREȚURI CLARE,\nSPUSE DIN START.'}
          description="Alege categoria și vezi pachetele. Dacă ai un proiect mixt, îți facem o ofertă pe măsură."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                filter === cat.id
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border text-muted hover:text-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-16">
          {visible.map((group) => (
            <div key={group.id}>
              <h3 className="font-display text-2xl md:text-3xl">{group.title}</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.packages.map((pkg) => (
                  <PricingCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
              {group.note && <p className="mt-5 max-w-3xl text-sm text-muted">{group.note}</p>}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Button href={waHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Solicită pe WhatsApp
          </Button>
          <p className="text-sm text-muted">Ai nevoie de mai multe servicii? Îți fac un pachet pe măsură.</p>
        </div>
      </div>
    </section>
  )
}
