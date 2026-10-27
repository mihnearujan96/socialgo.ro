import { Hero } from '@/components/home/Hero'
import { ServicesExplorer } from '@/components/home/ServicesExplorer'
import { DevWorld } from '@/components/home/DevWorld'
import { MarketingWorld } from '@/components/home/MarketingWorld'
import { PhotoWorld } from '@/components/home/PhotoWorld'
import { VideoWorld } from '@/components/home/VideoWorld'
import { DroneWorld } from '@/components/home/DroneWorld'
import { HospitalityWorld } from '@/components/home/HospitalityWorld'
import { PricingSection } from '@/components/home/PricingSection'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { ContactCTA } from '@/components/home/ContactCTA'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function HomePage() {
  usePageMeta({
    title: 'SocialGo — Creative Technology Studio',
    description:
      'Development, marketing și producție vizuală. Un singur studio pentru ideile care merită să iasă în evidență.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <ServicesExplorer />
      <DevWorld />
      <MarketingWorld />
      <PhotoWorld />
      <VideoWorld />
      <DroneWorld />
      <HospitalityWorld />
      <PricingSection />
      <AboutTeaser />
      <ContactCTA />
    </>
  )
}
