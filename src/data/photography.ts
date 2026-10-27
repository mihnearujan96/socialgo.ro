export interface PhotoItem {
  id: string
  src: string
  alt: string
  category: 'Nunți' | 'Evenimente' | 'Portrete' | 'Business'
}

export const weddingPhotos: PhotoItem[] = [
  {
    id: 'wedding-01',
    src: '/assets/photography/weddings/wedding-01.jpg',
    alt: 'Mire și mireasă pe covorul alb, la ceremonia outdoor',
    category: 'Nunți',
  },
  {
    id: 'wedding-02',
    src: '/assets/photography/weddings/wedding-02.jpg',
    alt: 'Dansul mirilor, mirele ridică mireasa pe ring',
    category: 'Nunți',
  },
  {
    id: 'wedding-03',
    src: '/assets/photography/weddings/wedding-03.jpg',
    alt: 'Mirele poartă mireasa pe o punte din lemn, în natură',
    category: 'Nunți',
  },
]
