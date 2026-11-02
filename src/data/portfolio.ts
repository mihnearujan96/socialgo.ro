export type PortfolioCategory =
  | 'all'
  | 'development'
  | 'marketing'
  | 'photography'
  | 'video'
  | 'drone'
  | 'hospitality'

export type WebShowcase = 'presentation' | 'app'

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
  coverVideo?: string
  mobileImage?: string
  coverPosition?: string
  url?: string
  showcase?: WebShowcase
  year?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ceramica-pietraru',
    title: 'Ceramica Pietraru',
    category: 'development',
    categoryLabel: 'Site de prezentare',
    summary:
      'Site pentru atelierul de ceramică din Horezu — povestea familiei, colecțiile și magazinul.',
    challenge:
      'Atelierul avea nevoie de un site care să se simtă la fel de cald ca lucrul manual și să ducă oamenii spre colecție, poveste și magazin.',
    scope: ['Site de prezentare', 'Poveste și colecții', 'Magazin', 'Versiune pentru telefon'],
    deliverables: ['Site public', 'Pagini de colecție', 'Contact și magazin'],
    status: 'live',
    coverTone: '#c4784a',
    coverImage: '/assets/portfolio/ceramica-pietraru-desktop.jpg',
    mobileImage: '/assets/portfolio/ceramica-pietraru-mobile.jpg',
    coverPosition: 'center top',
    url: 'https://ceramicapietraru.ro/',
    showcase: 'presentation',
  },
  {
    slug: 'venty',
    title: 'Venty',
    category: 'development',
    categoryLabel: 'Aplicație web',
    summary:
      'Platformă pentru evenimente: furnizori verificați, planificare și invitații, într-un singur loc.',
    challenge:
      'Planificarea unui eveniment e împrăștiată între mesaje și oferte. Venty le adună într-un flux clar, pentru cei care organizează și pentru furnizori.',
    scope: ['Aplicație web', 'Furnizori și oferte', 'Planificare', 'Conturi'],
    deliverables: ['Platformă publică', 'Flux de planificare', 'Pagină pentru furnizori'],
    status: 'live',
    coverTone: '#2563eb',
    coverImage: '/assets/portfolio/venty-desktop.jpg',
    mobileImage: '/assets/portfolio/venty-mobile.png',
    coverPosition: 'center top',
    url: 'https://venty.ro/',
    showcase: 'app',
  },
  {
    slug: 'reels-social',
    title: 'Reels & social',
    category: 'marketing',
    categoryLabel: 'Marketing',
    summary: 'Reels pentru feed: atenție în primele secunde, mesaj clar, ritm de brand.',
    challenge: 'Conținutul trebuie să oprească scroll-ul și să ducă spre o acțiune.',
    scope: ['Direcție creativă', 'Producție Reels', 'Montaj vertical'],
    deliverables: ['Reels', 'Versiuni pentru ads', 'Caption-uri'],
    status: 'live',
    coverTone: '#1a1630',
    coverVideo: '/assets/videos/reels/reel-01.mp4',
  },
  {
    slug: 'portofoliu-foto-editorial',
    title: 'Fotografie de nuntă',
    category: 'photography',
    categoryLabel: 'Fotografie',
    summary: 'Momente reale din nunți — lumină, emoție, ritm.',
    challenge: 'Fotografiile trebuie să spună povestea zilei, nu doar să o documenteze.',
    scope: ['Direcție artistică', 'Evenimente', 'Editare'],
    deliverables: ['Selecție editată', 'Galerie', 'Materiale pentru social'],
    status: 'live',
    coverTone: '#161616',
    coverImage: '/assets/photography/weddings/wedding-01.jpg',
  },
  {
    slug: 'fotografie-dans',
    title: 'Dansul mirilor',
    category: 'photography',
    categoryLabel: 'Fotografie',
    summary: 'Cadre din petrecere — mișcare, lumină, gesturi care rămân.',
    challenge: 'Pe ring, fiecare secundă contează: trebuie prinsă fără să întrerupă momentul.',
    scope: ['Coverage eveniment', 'Momente spontane', 'Editare'],
    deliverables: ['Selecție editată', 'Galerie digitală'],
    status: 'live',
    coverTone: '#1a1218',
    coverImage: '/assets/photography/weddings/wedding-02.jpg',
  },
  {
    slug: 'showreel-cinematic',
    title: 'Showreel video',
    category: 'video',
    categoryLabel: 'Video',
    summary: 'Limbaj filmic pentru branduri și evenimente.',
    challenge: 'Video-ul trebuie să prindă atenția din primele secunde.',
    scope: ['Concept', 'Filmare', 'Montaj', 'Culoare'],
    deliverables: ['Showreel', 'Versiuni vertical / orizontal'],
    status: 'live',
    coverTone: '#12182a',
    coverVideo: '/assets/videos/showreel.mp4',
  },
  {
    slug: 'perspectiva-aeriana',
    title: 'Perspective aeriene',
    category: 'drone',
    categoryLabel: 'Drone',
    summary: 'Cadre aeriene și de noapte pentru turism, imobiliare și business — unde zborul este permis.',
    challenge: 'Perspectiva de sus schimbă cum se vede un spațiu.',
    scope: ['Fotografie aeriană', 'Filmare 4K', 'Conformitate EASA'],
    deliverables: ['Poze aeriene', 'Secvențe video', 'Materiale promo'],
    status: 'live',
    coverTone: '#0f1f24',
    coverVideo: '/assets/videos/city-night.mp4',
  },
  {
    slug: 'solutie-business',
    title: 'Pachet pentru firmă',
    category: 'hospitality',
    categoryLabel: 'Business',
    summary: 'Site + foto + video + social — un pachet digital complet pentru firmă.',
    challenge: 'O firmă modernă are nevoie de mai mult decât un site static.',
    scope: ['Web', 'Foto / video', 'Drone', 'Social'],
    deliverables: ['Prezență online', 'Conținut vizual', 'Pași clari de contact'],
    status: 'live',
    coverTone: '#1c1810',
    coverImage: '/assets/photography/weddings/wedding-03.jpg',
  },
]

export function portfolioByShowcase(kind: WebShowcase) {
  return portfolioProjects.filter((project) => project.showcase === kind)
}

export const portfolioFilters: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'Toate' },
  { id: 'development', label: 'Site-uri & aplicații' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'photography', label: 'Fotografie' },
  { id: 'video', label: 'Video' },
  { id: 'drone', label: 'Drone' },
  { id: 'hospitality', label: 'Business' },
]
