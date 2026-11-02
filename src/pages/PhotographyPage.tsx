import { useMemo, useState } from 'react'
import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { photoCategories } from '@/data/services'
import { weddingPhotos } from '@/data/photography'
import { contactInfo } from '@/data/contact'
import { usePageMeta } from '@/hooks/usePageMeta'

const filters = ['Toate', 'Nunți', ...photoCategories.filter((c) => c !== 'Nunți')] as const

export default function PhotographyPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Nunți')

  usePageMeta({
    title: 'Fotografie — SocialGo',
    description:
      'Fotografie de nuntă de la 700 €, cu stick. Botez 550 €, cu stick. Majorat 170 €. Foto + video nuntă 1.400 €, cu stick și album.',
    path: '/fotografie',
  })

  const gallery = useMemo(() => {
    if (filter === 'Toate' || filter === 'Nunți') return weddingPhotos
    return []
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="04 · Fotografie"
        title={'NUNȚI ȘI EVENIMENTE\nFĂCUTE CU GRIJĂ.'}
        description="Vorbim înainte de fiecare proiect, ca să știm ce contează pentru tine în ziua respectivă."
        tone="from-white/5"
        className="bg-black"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="max-w-3xl text-muted leading-relaxed">
          <p>
            Salut — sunt Mihnea, fotograful din echipa SocialGo. Fotografiez ca să rămână momentele
            importante: gesturi, emoții, detalii pe care le uiți dacă nimeni nu le prinde la timp.
          </p>
          <p className="mt-4">
            Portofoliul complet e pe{' '}
            <a
              href={contactInfo.photographySite}
              className="text-accent underline"
              target="_blank"
              rel="noreferrer"
            >
              mihnearujan.ro
            </a>
            . Aici pe SocialGo vezi începând cu nunțile.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] ${
                filter === f ? 'border-accent text-accent' : 'border-border text-muted'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo) => (
            <figure key={photo.id} className="overflow-hidden rounded-[1.5rem] border border-border">
              <img src={photo.src} alt={photo.alt} className="aspect-[3/2] w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>

        {gallery.length === 0 && (
          <div className="mt-10 rounded-[2rem] border border-border bg-bg-secondary p-8 text-muted">
            Pentru „{filter}”, galeria se completează pe măsură ce adăugăm proiecte. Între timp,
            scrie-ne pe WhatsApp sau vezi{' '}
            <a
              href={contactInfo.photographySite}
              className="text-accent underline"
              target="_blank"
              rel="noreferrer"
            >
              mihnearujan.ro
            </a>
            .
          </div>
        )}

        <div className="mt-16 rounded-[2rem] border border-border bg-bg-secondary p-6 md:p-8">
          <h2 className="font-display text-3xl">Hai să vorbim</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Pentru nunți, botezuri, majorate sau ședințe, stabilim detaliile pe WhatsApp.
          </p>
          <div className="mt-6">
            <Button
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Scrie pe WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
