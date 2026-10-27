import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { footerNav } from '@/data/navigation'
import { contactInfo } from '@/data/contact'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-muted">
            Creative Technology Studio. Construim digital. Creăm impact. Capturăm emoții.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={`mailto:${contactInfo.email}`} className="block hover:text-accent">
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="block hover:text-accent">
              {contactInfo.phoneDisplay}
            </a>
            <p className="text-muted">{contactInfo.locationNote}</p>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">Navigare</p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {footerNav.map((item) => (
              <Link key={item.path + item.label} to={item.path} className="text-sm text-muted hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">Social</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={contactInfo.social.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
              Instagram
            </a>
            <a href={contactInfo.social.tiktok} target="_blank" rel="noreferrer" className="hover:text-accent">
              TikTok
            </a>
            <a href={contactInfo.social.facebook} target="_blank" rel="noreferrer" className="hover:text-accent">
              Facebook
            </a>
            <a href={contactInfo.photographySite} target="_blank" rel="noreferrer" className="hover:text-accent">
              Mihnea Rujan Foto
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} SocialGo. Toate drepturile rezervate.</p>
          <p>GDPR-conscious · Cookie-uri esențiale · Datele tale rămân private.</p>
        </div>
      </div>
    </footer>
  )
}
