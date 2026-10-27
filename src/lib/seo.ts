const SITE = 'https://socialgo.ro'
const DEFAULT_IMAGE = `${SITE}/brand/og-image.png`

export interface PageMeta {
  title: string
  description: string
  path?: string
  image?: string
}

export function applyPageMeta({ title, description, path = '/', image = DEFAULT_IMAGE }: PageMeta) {
  document.title = title

  const set = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      if (selector.includes('property=')) {
        el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '')
      } else if (selector.includes('name=')) {
        el.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] ?? '')
      }
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }

  set('meta[name="description"]', 'content', description)
  set('meta[property="og:title"]', 'content', title)
  set('meta[property="og:description"]', 'content', description)
  set('meta[property="og:url"]', 'content', `${SITE}${path}`)
  set('meta[property="og:image"]', 'content', image)
  set('meta[name="twitter:title"]', 'content', title)
  set('meta[name="twitter:description"]', 'content', description)
  set('meta[name="twitter:image"]', 'content', image)

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = `${SITE}${path}`
}
