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
    title: 'Web Development',
    short: 'Site-uri și experiențe digitale construite pe măsură.',
    slug: 'web-development',
    path: '/web-development',
    world: 'dev',
    accent: '#C7FF3D',
  },
  {
    id: 'apps',
    number: '02',
    title: 'Web Applications',
    short: 'Platforme, dashboard-uri și fluxuri de business.',
    slug: 'aplicatii-web',
    path: '/aplicatii-web',
    world: 'dev',
    accent: '#C7FF3D',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Digital Marketing',
    short: 'Conținut care atrage. Strategie care contează.',
    slug: 'marketing',
    path: '/marketing',
    world: 'marketing',
    accent: '#8080FF',
  },
  {
    id: 'photo',
    number: '04',
    title: 'Photography',
    short: 'Emoții reale. Amintiri care rămân.',
    slug: 'fotografie',
    path: '/fotografie',
    world: 'photo',
    accent: '#F5F5F3',
  },
  {
    id: 'video',
    number: '05',
    title: 'Videography',
    short: 'Povești care merită să fie văzute.',
    slug: 'videografie',
    path: '/videografie',
    world: 'video',
    accent: '#8080FF',
  },
  {
    id: 'drone',
    number: '06',
    title: 'Drone Production',
    short: 'O nouă perspectivă asupra lumii.',
    slug: 'drona',
    path: '/drona',
    world: 'drone',
    accent: '#C7FF3D',
  },
  {
    id: 'hospitality',
    number: '07',
    title: 'Business',
    short: 'Website, conținut și producție vizuală pentru afacerea ta.',
    slug: 'hoteluri-business',
    path: '/hoteluri-business',
    world: 'hospitality',
    accent: '#C7FF3D',
  },
  {
    id: 'branding',
    number: '08',
    title: 'Branding & Social Media',
    short: 'Identitate vizuală și prezență coerentă online.',
    slug: 'branding',
    path: '/marketing',
    world: 'brand',
    accent: '#8080FF',
  },
]

export const webDevServices = [
  'Site-uri de prezentare pentru business',
  'Landing pages',
  'Site-uri corporate',
  'Aplicații React personalizate',
  'Dezvoltare de aplicații web',
  'Dashboard-uri',
  'Platforme de rezervări și booking',
  'Soluții pentru hoteluri și restaurante',
  'E-commerce',
  'Mentenanță și optimizare',
  'Integrări API',
  'Fluxuri de business personalizate',
]

export const marketingServices = [
  'Administrare social media',
  'Marketing Instagram',
  'Marketing Facebook',
  'Conținut TikTok',
  'Producție Reels',
  'Video pe format scurt',
  'Strategie creativă',
  'Campanii promoționale',
  'Creare de conținut',
  'Poziționare de brand',
  'Creatives pentru advertising',
  'Pachete lunare de content pentru business',
]

export const photoCategories = [
  'Nunți',
  'Botezuri',
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
  'Videografie evenimente',
  'Filme promoționale pentru business',
  'Video de prezentare hotel',
  'Reels pentru social media',
  'Filme de brand',
  'Conținut publicitar pe format scurt',
  'Video comercial creativ',
]

export const droneServices = [
  'Fotografie aeriană',
  'Filmare aeriană',
  'Prezentări imobiliare',
  'Hoteluri și resorturi',
  'Turism și destinații',
  'Conținut promoțional pentru business',
  'Acoperire evenimente (unde este permis)',
]

export const hospitalityBundle = [
  'Website de prezentare',
  'Aplicații web și fluxuri digitale',
  'Fotografie de business și produs',
  'Filmări drone (unde este permis)',
  'Video promoțional',
  'Administrare social media',
  'Conținut Reels',
  'Poziționare de brand online',
]
