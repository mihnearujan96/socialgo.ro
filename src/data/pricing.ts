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
    name: 'Site de start',
    price: 'de la 200 €',
    description: 'O pagină de prezentare sau un site scurt, clar pe telefon și pe computer.',
    details: [
      'Structură simplă, pe mesajul tău',
      'Design responsive',
      'Buton de contact (WhatsApp / telefon)',
      'Optimizare de bază pentru Google',
    ],
  },
  {
    id: 'business',
    name: 'Site business',
    price: '400 – 500 €',
    note: 'preț de start',
    description: 'Site cu mai multe secțiuni sau pagini, potrivit unei firme care vrea să arate serios online.',
    details: [
      'Mai multe secțiuni sau pagini',
      'Design îngrijit pe mobil și desktop',
      'Integrări de bază (formulare, hărți etc.)',
      'Pregătit să crească pe măsură ce ai nevoie',
    ],
    highlight: true,
  },
  {
    id: 'custom',
    name: 'Aplicație web și mobil',
    price: 'de la 1.500 €',
    note: 'preț de start, după discuție',
    description:
      'Aplicații web și mobile: rezervări, panouri interne, platforme — făcute pe procesul tău.',
    details: [
      'Discuție despre ce ai nevoie',
      'Structură pe măsură',
      'Dezvoltare și testare',
      'Ofertă clară înainte să începem',
    ],
  },
]

/** Max selectable reels in the calculator. */
export const reelsMaxCount = 20

/** Base 300 lei / reel; softer volume discount on unit price. */
export function reelsUnitPrice(count: number): number {
  const n = Math.max(1, Math.min(reelsMaxCount, Math.round(count)))
  if (n <= 1) return 300
  if (n <= 3) return 285
  if (n <= 6) return 270
  if (n <= 12) return 255
  return 240
}

export function reelsTotal(count: number): number {
  const n = Math.max(1, Math.min(reelsMaxCount, Math.round(count)))
  return reelsUnitPrice(n) * n
}

export const marketingPricing: PricingPackage[] = [
  {
    id: 'reels',
    name: 'Producție Reels',
    price: 'de la 300 lei',
    note: 'scade dacă iei mai multe',
    description:
      'Video scurt, vertical, pentru Instagram sau TikTok. Un reel: 300 lei. La volume mai mari, prețul pe bucată scade.',
    details: [
      '1 reel → 300 lei',
      '2–3 → 285 lei / reel',
      '4–6 → 270 lei / reel',
      '7–12 → 255 lei / reel',
      '13+ → 240 lei / reel',
    ],
    highlight: true,
  },
  {
    id: 'campaigns',
    name: 'Campanii & administrare',
    price: 'ofertă personalizată',
    description:
      'Pentru pachete lunare, campanii și administrare continuă, stabilim împreună ce ai nevoie și cât costă.',
    details: [
      'Plan de conținut',
      'Producție (foto / video / Reels)',
      'Publicare și administrare',
      'Discuție pe obiective reale',
    ],
  },
]

export const photoPricing: PricingPackage[] = [
  {
    id: 'wedding-photo',
    name: 'Fotografie de nuntă',
    price: 'de la 700 €',
    description: 'Acoperire foto pentru ziua nunții. Inclus stick cu fotografiile.',
    details: ['Discuție înainte', 'Acoperire eveniment', 'Selecție și editare', 'Stick cu fotografiile'],
    highlight: true,
  },
  {
    id: 'wedding-combo',
    name: 'Foto + video nuntă',
    price: '1.400 €',
    description: 'Fotografii și film pentru ziua nunții. Inclus stick și album.',
    details: ['Echipă foto + video', 'Acoperire eveniment', 'Stick cu materialele', 'Album foto'],
    highlight: true,
  },
  {
    id: 'baptism',
    name: 'Pachet botez',
    price: '550 €',
    description: 'Pachet pentru ziua de botez — ceremonie și petrecere. Inclus stick.',
    details: ['Acoperire ceremonie și petrecere', 'Selecție și editare', 'Galerie digitală', 'Stick cu fotografiile'],
    highlight: true,
  },
  {
    id: 'majorat',
    name: 'Pachet majorat',
    price: '170 €',
    description: 'Acoperire foto pentru majorat — rapid, clar, gata de postat.',
    details: ['Acoperire eveniment', 'Editare foto', 'Livrare potrivită pentru telefon'],
  },
  {
    id: 'other-events',
    name: 'Alte evenimente & ședințe',
    price: 'preț la cerere',
    note: 'în funcție de eveniment',
    description: 'Aniversări, portrete, branding personal, hoteluri și business.',
    details: ['Discuție pe WhatsApp', 'Durată și livrabile pe măsură', 'Ofertă înainte de rezervare'],
  },
]

export const droneNote =
  'Zborul cu drona depinde de autorizări, restricții locale și vreme. Lucrăm cu piloți certificați EASA și respectăm zonele în care zborul este interzis.'
