import { Button } from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta({
    title: '404 — SocialGo',
    description: 'Pagina nu a fost găsită.',
    path: '/404',
  })

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl md:text-7xl">Pagina s-a pierdut în frame.</h1>
      <p className="mt-4 max-w-md text-muted">
        Linkul nu există sau a fost mutat. Hai înapoi în studio.
      </p>
      <div className="mt-8 flex gap-4">
        <Button to="/">Acasă</Button>
        <Button to="/servicii" variant="outline">
          Servicii
        </Button>
      </div>
    </section>
  )
}
