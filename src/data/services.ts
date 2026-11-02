export type ServiceSlug =
  | 'web-development'
  | 'aplicatii-web'
  | 'marketing'
  | 'fotografie'
  | 'videografie'
  | 'drona'
  | 'hoteluri-business'
  | 'branding'

export interface ServiceItem {
  id: string
  number: string
  title: string
  short: string
  slug: ServiceSlug | 'servicii'
  path: string
  world: 'dev' | 'marketing' | 'photo' | 'video' | 'drone' | 'hospitality' | 'brand'
  accent: string
}

export const servicesNav: ServiceItem[] = [
  {
    id: 'web',
    number: '01',
    title: 'Site-uri web',
    short: 'Site-uri de prezentare și landing pages, făcute clar și ușor de folosit.',
    slug: 'web-development',
    path: '/#development',
    world: 'dev',
    accent: '#C7FF3D',
  },
  {
    id: 'apps',
    number: '02',
    title: 'Aplicații web',
    short: 'Rezervări, panouri interne și platforme pe măsură pentru afacerea ta.',
    slug: 'aplicatii-web',
    path: '/#development',
    world: 'dev',
    accent: '#C7FF3D',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Reels & marketing',
    short: 'Conținut pentru Instagram, TikTok și Facebook — fără statistici inventate.',
    slug: 'marketing',
    path: '/#marketing',
    world: 'marketing',
    accent: '#8080FF',
  },
  {
    id: 'photo',
    number: '04',
    title: 'Fotografie',
    short: 'Nunți, botezuri, majorate și ședințe — imagini care rămân.',
    slug: 'fotografie',
    path: '/#fotografie',
    world: 'photo',
    accent: '#F5F5F3',
  },
  {
    id: 'video',
    number: '05',
    title: 'Videografie',
    short: 'Filme de eveniment, promoții pentru firmă și conținut scurt pentru social.',
    slug: 'videografie',
    path: '/#videografie',
    world: 'video',
    accent: '#8080FF',
  },
  {
    id: 'drone',
    number: '06',
    title: 'Filmări cu drona',
    short: 'Cadre aeriene acolo unde zborul este permis.',
    slug: 'drona',
    path: '/#drona',
    world: 'drone',
    accent: '#C7FF3D',
  },
  {
    id: 'hospitality',
    number: '07',
    title: 'Soluții pentru business',
    short: 'Site, conținut și imagine pentru firmă — într-un pachet pe măsură.',
    slug: 'hoteluri-business',
    path: '/#business',
    world: 'hospitality',
    accent: '#C7FF3D',
  },
  {
    id: 'branding',
    number: '08',
    title: 'Branding & social media',
    short: 'Cum arăți online și ce publici — coerent, pe înțelesul oamenilor.',
    slug: 'branding',
    path: '/#marketing',
    world: 'brand',
    accent: '#8080FF',
  },
]

export const webDevServices = [
  'Site-uri de prezentare',
  'Pagini de landing',
  'Site-uri pentru firme',
  'Aplicații web personalizate',
  'Panouri de administrare',
  'Platforme de rezervări',
  'Soluții pentru hoteluri și restaurante',
  'Magazine online',
  'Mentenanță și optimizare',
  'Integrări cu alte sisteme',
]

export const marketingServices = [
  'Administrare Instagram și Facebook',
  'Conținut pentru TikTok',
  'Producție Reels',
  'Video scurt pentru social media',
  'Campanii promoționale',
  'Creare de conținut',
  'Poziționare de brand',
  'Materiale pentru ads',
  'Pachete lunare de conținut',
]

export const photoCategories = [
  'Nunți',
  'Botezuri',
  'Majorate',
  'Aniversări',
  'Cununii civile',
  'Cupluri',
  'Portrete',
  'Personal branding',
  'Hoteluri și pensiuni',
  'Produse și business',
  'Evenimente corporate',
]

export const videoServices = [
  'Filme de nuntă',
  'Video pentru evenimente',
  'Filme promoționale pentru firmă',
  'Video de prezentare hotel',
  'Reels pentru social media',
  'Filme de brand',
  'Conținut publicitar scurt',
]

export const droneServices = [
  'Fotografie aeriană',
  'Filmare aeriană',
  'Prezentări imobiliare',
  'Hoteluri și resorturi',
  'Turism și destinații',
  'Conținut promoțional pentru firmă',
  'Evenimente (acolo unde este permis)',
]

export const hospitalityBundle = [
  'Site de prezentare',
  'Aplicații web și fluxuri digitale',
  'Fotografie de business și produs',
  'Filmări cu drona (unde este permis)',
  'Video promoțional',
  'Administrare social media',
  'Conținut Reels',
  'Prezență coerentă online',
]
