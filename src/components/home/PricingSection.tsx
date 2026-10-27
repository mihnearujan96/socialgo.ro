import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/ui/PricingCard'
import { Button } from '@/components/ui/Button'
import {
  webPricing,
  marketingPricing,
  photoPricing,
  droneNote,
  type PricingPackage,
} from '@/data/pricing'

type CategoryId = 'all' | 'web' | 'marketing' | 'photo' | 'drone'

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Toate' },
  { id: 'web', label: 'Web & Apps' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'photo', label: 'Foto & Video' },
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
    title: 'Web Development & Aplicații',
    packages: webPricing,
    note: 'Prețurile pentru aplicații custom sunt indicative și se stabilesc după consultație.',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    packages: marketingPricing,
    note: 'Campaniile lunare și managementul continuu se ofertează personalizat.',
  },
  {
    id: 'photo',
    title: 'Fotografie & Video',
    packages: photoPricing,
    note: 'Pentru alte tipuri de evenimente, prețul se stabilește în funcție de nevoie.',
  },
  {
    id: 'drone',
    title: 'Producție Drone',
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
          title={'PREȚURI CLARE.\nPE CATEGORII.'}
          description="Toate pachetele într-un singur loc. Alege categoria și vezi diferențele pe carduri."
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
          <Button to="/contact">Solicită o ofertă</Button>
          <p className="text-sm text-muted">Ai un proiect mixt? Îți facem un pachet pe măsură.</p>
        </div>
      </div>
    </section>
  )
}
