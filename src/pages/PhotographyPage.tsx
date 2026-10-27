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
    description: 'Fotografie de nuntă de la 700 €. Foto + video de la 1.400 €. Portrete, evenimente, branding.',
    path: '/fotografie',
  })

  const gallery = useMemo(() => {
    if (filter === 'Toate' || filter === 'Nunți') return weddingPhotos
    return []
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="04 · Photography"
        title={'EMOȚII REALE.\nAMINTIRI CARE RĂMÂN.'}
        description="Fotografie de eveniment și brand. Consultație înainte de fiecare proiect."
        tone="from-white/5"
        className="bg-black"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="max-w-3xl text-muted leading-relaxed">
          <p>
            Salut — sunt Mihnea. Fotografia mea pornește din dorința de a surprinde relațiile dintre
            oameni și de a crea imagini care emoționează.
          </p>
          <p className="mt-4">
            Pentru portofoliul complet, vizitează{' '}
            <a href={contactInfo.photographySite} className="text-accent underline" target="_blank" rel="noreferrer">
              mihnearujan.ro
            </a>
            .
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                filter === f ? 'border-accent text-accent' : 'border-border text-muted hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {gallery.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => (
              <figure key={photo.id} className="overflow-hidden rounded-[1.5rem] border border-border">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                  data-cursor="view"
                />
                <figcaption className="px-3 py-2 text-xs text-muted">{photo.category}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[1.75rem] border border-border bg-surface p-8 text-muted">
            Pentru {filter.toLowerCase()}, vezi portofoliul pe{' '}
            <a href={contactInfo.photographySite} className="text-accent underline" target="_blank" rel="noreferrer">
              mihnearujan.ro
            </a>
            . Galeria de pe SocialGo pornește cu nunțile.
          </div>
        )}

        <div className="mt-16 rounded-[2rem] border border-border bg-bg-secondary p-6 md:p-8">
          <h2 className="font-display text-3xl">Hai să vorbim</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Pentru nunți, evenimente sau ședințe, stabilim detaliile într-o consultație scurtă.
          </p>
          <div className="mt-6">
            <Button to="/contact">Programează o consultație</Button>
          </div>
        </div>
      </section>
    </>
  )
}
