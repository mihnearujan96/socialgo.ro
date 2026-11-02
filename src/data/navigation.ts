export const mainNav = [
  { label: 'Portofoliu', path: '/portofoliu' },
  { label: 'Servicii', path: '/#servicii-home' },
  { label: 'Prețuri', path: '/#pricing' },
  { label: 'Despre', path: '/despre' },
] as const

/** Categorii clare din meniu — duc pe secțiunile de pe homepage. */
export const serviceMenu = [
  {
    group: 'Evenimente',
    items: [
      { label: 'Nunți — foto & video', path: '/#fotografie', hint: 'Ziua nunții, pe înțelesul tău' },
      { label: 'Botezuri', path: '/#pricing', hint: 'Pachet 550 €' },
      { label: 'Majorate', path: '/#pricing', hint: 'Pachet 170 €' },
      { label: 'Videografie evenimente', path: '/#videografie', hint: 'Filme de eveniment' },
    ],
  },
  {
    group: 'Conținut & marketing',
    items: [
      { label: 'Reels', path: '/#marketing', hint: 'De la 300 lei / reel' },
      { label: 'Marketing digital', path: '/#marketing', hint: 'Social media și campanii' },
      { label: 'Branding & social media', path: '/#marketing', hint: 'Cum arăți online' },
    ],
  },
  {
    group: 'Digital & business',
    items: [
      { label: 'Site-uri web', path: '/#development', hint: 'Prezentare și landing pages' },
      { label: 'Aplicații web', path: '/#development', hint: 'Rezervări, panouri, platforme' },
      { label: 'Filmări cu drona', path: '/#drona', hint: 'Cadre aeriene' },
      { label: 'Soluții pentru firme', path: '/#business', hint: 'Pachet complet' },
    ],
  },
] as const

export const footerNav = [
  { label: 'Site-uri web', path: '/#development' },
  { label: 'Aplicații web', path: '/#development' },
  { label: 'Reels & marketing', path: '/#marketing' },
  { label: 'Fotografie nunți', path: '/#fotografie' },
  { label: 'Videografie', path: '/#videografie' },
  { label: 'Drone', path: '/#drona' },
  { label: 'Pentru firme', path: '/#business' },
  { label: 'Portofoliu', path: '/portofoliu' },
  { label: 'Prețuri', path: '/#pricing' },
  { label: 'Despre', path: '/despre' },
  { label: 'Contact WhatsApp', path: '/contact' },
] as const
