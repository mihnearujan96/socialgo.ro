export type PortfolioCategory =
  | 'all'
  | 'development'
  | 'marketing'
  | 'photography'
  | 'video'
  | 'drone'
  | 'hospitality'

export interface PortfolioProject {
  slug: string
  title: string
  category: Exclude<PortfolioCategory, 'all'>
  categoryLabel: string
  summary: string
  challenge: string
  scope: string[]
  deliverables: string[]
  status: 'placeholder' | 'live'
  coverTone: string
  coverImage?: string
  year?: string
}

/**
 * Placeholder projects for layout only.
 * Replace with verified client work before treating them as real case studies.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'platforma-booking-demo',
    title: 'Platformă Booking — Demo',
    category: 'development',
    categoryLabel: 'Development',
    summary: 'Exemplu de structură pentru rezervări online: fluxuri clare și UI premium.',
    challenge: 'Un sistem de rezervări trebuie să fie simplu pentru client și util pentru afacere.',
    scope: ['UX & UI', 'Frontend React', 'Fluxuri de rezervare', 'Dashboard'],
    deliverables: ['Interfață de booking', 'Panou administrare', 'Design system'],
    status: 'placeholder',
    coverTone: '#1a2a14',
  },
  {
    slug: 'identitate-social-demo',
    title: 'Sistem de Conținut Social — Demo',
    category: 'marketing',
    categoryLabel: 'Marketing',
    summary: 'Cadru vizual pentru Reels, carusele și campanii.',
    challenge: 'Conținutul trebuie să fie coerent, nu doar postări izolate.',
    scope: ['Strategie creativă', 'Producție Reels', 'Templates vizuale'],
    deliverables: ['Kit de conținut', 'Calendar editorial', 'Creatives advertising'],
    status: 'placeholder',
    coverTone: '#1a1630',
  },
  {
    slug: 'portofoliu-foto-editorial',
    title: 'Fotografie de nuntă',
    category: 'photography',
    categoryLabel: 'Fotografie',
    summary: 'Momente reale din nunți — lumină, emoție, ritm vizual.',
    challenge: 'Fotografia trebuie să spună povestea zilei, nu doar să o documenteze.',
    scope: ['Directionare artistică', 'Evenimente', 'Editare'],
    deliverables: ['Selecție editată', 'Galerie', 'Materiale social'],
    status: 'live',
    coverTone: '#161616',
    coverImage: '/assets/photography/weddings/wedding-01.jpg',
  },
  {
    slug: 'showreel-cinematic',
    title: 'Showreel Cinematic',
    category: 'video',
    categoryLabel: 'Video',
    summary: 'Limbaj filmic pentru branduri și evenimente.',
    challenge: 'Video-ul trebuie să prindă atenția din primele secunde.',
    scope: ['Concept', 'Filmare', 'Montaj', 'Color'],
    deliverables: ['Showreel', 'Versiuni vertical / landscape'],
    status: 'placeholder',
    coverTone: '#12182a',
  },
  {
    slug: 'perspectiva-aeriana',
    title: 'Perspectivă Aeriană',
    category: 'drone',
    categoryLabel: 'Drone',
    summary: 'Cadre aeriene pentru turism, imobiliare și business — unde zborul este permis.',
    challenge: 'Perspectiva aeriană schimbă percepția asupra unui spațiu.',
    scope: ['Fotografie aeriană', 'Filmare 4K', 'Conformitate EASA'],
    deliverables: ['Still-uri aeriene', 'Secvențe video', 'Materiale promo'],
    status: 'placeholder',
    coverTone: '#0f1f24',
  },
  {
    slug: 'solutie-business',
    title: 'Pachet Business',
    category: 'hospitality',
    categoryLabel: 'Business',
    summary: 'Website + foto + video + social — un pachet digital complet pentru afacere.',
    challenge: 'O afacere modernă are nevoie de mai mult decât un site static.',
    scope: ['Web', 'Foto/Video', 'Drone', 'Social'],
    deliverables: ['Prezență digitală', 'Conținut vizual', 'Fluxuri de conversie'],
    status: 'placeholder',
    coverTone: '#1f1810',
  },
]

export const portfolioFilters: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'Toate' },
  { id: 'development', label: 'Development' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'photography', label: 'Fotografie' },
  { id: 'video', label: 'Video' },
  { id: 'drone', label: 'Drone' },
  { id: 'hospitality', label: 'Business' },
]
