import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const WebDevelopmentPage = lazy(() => import('@/pages/WebDevelopmentPage'))
const WebAppsPage = lazy(() => import('@/pages/WebAppsPage'))
const MarketingPage = lazy(() => import('@/pages/MarketingPage'))
const PhotographyPage = lazy(() => import('@/pages/PhotographyPage'))
const VideographyPage = lazy(() => import('@/pages/VideographyPage'))
const DronePage = lazy(() => import('@/pages/DronePage'))
const HospitalityPage = lazy(() => import('@/pages/HospitalityPage'))
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'))
const PortfolioDetailPage = lazy(() => import('@/pages/PortfolioDetailPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-pulse rounded-full border border-accent" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="servicii" element={<ServicesPage />} />
            <Route path="web-development" element={<WebDevelopmentPage />} />
            <Route path="aplicatii-web" element={<WebAppsPage />} />
            <Route path="marketing" element={<MarketingPage />} />
            <Route path="fotografie" element={<PhotographyPage />} />
            <Route path="videografie" element={<VideographyPage />} />
            <Route path="drona" element={<DronePage />} />
            <Route path="hoteluri-business" element={<HospitalityPage />} />
            <Route path="portofoliu" element={<PortfolioPage />} />
            <Route path="portofoliu/:slug" element={<PortfolioDetailPage />} />
            <Route path="despre" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
