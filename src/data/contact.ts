export const contactInfo = {
  email: 'mihnearujan@gmail.com',
  phone: '+40756322681',
  phoneDisplay: '+40 756 322 681',
  whatsapp: '40756322681',
  location: 'România',
  locationNote: 'București, Vâlcea, Cluj, Iași — și oriunde în țară.',
  photographyEmail: 'mihnearujan@gmail.com',
  photographySite: 'https://mihnearujan.ro/',
  social: {
    instagram: 'https://www.instagram.com/socialgo.ro/',
    facebook: 'https://www.facebook.com/profile.php?id=100089230184463',
    tiktok: 'https://www.tiktok.com/@gobydrone',
  },
} as const

export const serviceOptions = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'aplicatii-web', label: 'Aplicații Web' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'fotografie', label: 'Fotografie' },
  { value: 'videografie', label: 'Videografie' },
  { value: 'drona', label: 'Producție Drone' },
  { value: 'hoteluri-business', label: 'Soluții Business' },
  { value: 'branding', label: 'Branding & Social Media' },
  { value: 'altceva', label: 'Altceva / Consultație' },
] as const

export const budgetOptions = [
  { value: '', label: 'Prefer să discut' },
  { value: 'sub-500', label: 'Sub 500 €' },
  { value: '500-1500', label: '500 – 1.500 €' },
  { value: '1500-3000', label: '1.500 – 3.000 €' },
  { value: '3000-plus', label: 'Peste 3.000 €' },
] as const
