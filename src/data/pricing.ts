export interface PricingPackage {
  id: string
  name: string
  price: string
  note?: string
  description: string
  details: string[]
  cta?: string
  highlight?: boolean
}

export const webPricing: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: 'de la 200 €',
    description: 'Landing page sau site de prezentare simplu, clar și responsive.',
    details: [
      'Structură concisă, orientată pe mesaj',
      'Design responsive',
      'Formă de contact',
      'Optimizare de bază SEO',
    ],
  },
  {
    id: 'business',
    name: 'Business Website',
    price: '400 – 500 €',
    note: 'interval de start',
    description:
      'Website de business mai complex, cu mai multe secțiuni și funcționalități adiționale.',
    details: [
      'Multiple secțiuni / pagini',
      'Design responsive avansat',
      'Integrări esențiale',
      'Pregătit pentru creștere',
    ],
    highlight: true,
  },
  {
    id: 'custom',
    name: 'Custom Web Application',
    price: 'orientativ ~2.000 €',
    note: 'preț indicativ, pe bază de ofertă',
    description:
      'Sisteme de booking, aplicații de rezervări, dashboard-uri, platforme de management și software web personalizat.',
    details: [
      'Analiză și consultanță',
      'Arhitectură pe măsură',
      'Dezvoltare full-stack',
      'Ofertă personalizată după cerințe',
    ],
  },
]

export const marketingPricing: PricingPackage[] = [
  {
    id: 'reels',
    name: 'Producție Reels',
    price: 'de la 350 RON',
    description: 'Conținut vertical scurt, gândit pentru atracție și ritm pe social media.',
    details: [
      'Concept și montaj',
      'Format vertical optimizat',
      'Livrare potrivită pentru Instagram / TikTok',
    ],
    highlight: true,
  },
  {
    id: 'campaigns',
    name: 'Campanii & management',
    price: 'ofertă personalizată',
    description:
      'Pentru campanii complete, pachete lunare și management continuu, lucrăm pe bază de briefing și ofertă dedicată.',
    details: [
      'Strategie de conținut',
      'Producție creativă',
      'Administrare și publicare',
      'Consultanță pe obiective',
    ],
  },
]

export const photoPricing: PricingPackage[] = [
  {
    id: 'wedding-photo',
    name: 'Fotografie de nuntă',
    price: 'de la 700 €',
    description: 'Acoperire fotografică pentru ziua nunții, cu atenție la momentele esențiale.',
    details: ['Discuție preliminară', 'Acoperire eveniment', 'Selecție și editare'],
    highlight: true,
  },
  {
    id: 'wedding-combo',
    name: 'Foto + Video nuntă',
    price: 'de la 1.400 €',
    description: 'Pachet combinat fotografie și videografie pentru o poveste vizuală completă.',
    details: ['Echipă foto + video', 'Acoperire eveniment', 'Livrare foto și film'],
  },
  {
    id: 'other-events',
    name: 'Alte evenimente & ședințe',
    price: 'preț personalizat',
    note: 'în funcție de eveniment',
    description: 'Botezuri, aniversări, portrete, branding personal, hoteluri și business.',
    details: ['Briefing dedicat', 'Durată și livrabile pe măsură', 'Consultație înainte de rezervare'],
  },
]

export const droneNote =
  'Operațiunile cu drona sunt condiționate de autorizări legale, restricții de zbor și condiții locale. Piloți certificați EASA. Zonele NO FLY sunt respectate.'
