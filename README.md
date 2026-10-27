# SocialGo — Creative Technology Studio

Website-ul oficial reinventat pentru [socialgo.ro](https://socialgo.ro): studio de creative technology (web, marketing, foto, video, drone, hospitality).

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Framer Motion
- Lenis smooth scroll
- React Router
- React Hook Form + Zod
- Lucide React

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Output-ul static este în `dist/` — deployabil pe Netlify, Vercel, Cloudflare Pages sau orice hosting static.

## Contact form

Formularul trimite mesaje prin [FormSubmit](https://formsubmit.co) către `mihnearujan@gmail.com`.

La primul submit real, FormSubmit cere confirmarea emailului. După activare, mesajele ajung în inbox.

## Brand assets

- `public/brand/logo-primary.svg` — wordmark + simbol
- `public/brand/logo-monogram.svg` — SG monogram
- `public/brand/favicon.svg`
- `public/brand/og-image.svg`
- Versiune light: `public/brand/logo-light.svg`

## Conținut

- Copy principal în română
- Prețuri și contact preluate din surse oficiale SocialGo / Mihnea Rujan
- Cardurile de portofoliu marcate `Placeholder` trebuie înlocuite cu proiecte reale înainte de lansare publică „ca portofoliu final”
- Galeria foto folosește asset-uri locale demonstrative; portofoliul foto complet rămâne pe [mihnearujan.ro](https://mihnearujan.ro/)

## Rute

| Path | Pagină |
|------|--------|
| `/` | Homepage cinematică |
| `/servicii` | Index servicii |
| `/web-development` | Web development + pricing |
| `/aplicatii-web` | Aplicații web |
| `/marketing` | Digital marketing |
| `/fotografie` | Fotografie |
| `/videografie` | Videografie |
| `/drona` | Drone |
| `/hoteluri-business` | Hospitality |
| `/portofoliu` | Portofoliu |
| `/portofoliu/:slug` | Case study |
| `/despre` | About |
| `/contact` | Contact + form |

## Note performanță

- Hero-ul folosește ilustrații SVG + parallax (fără WebGL greu)
- Video-urile au `preload="metadata"` / muted autoplay doar unde e potrivit
- Route-level code splitting via `React.lazy`
