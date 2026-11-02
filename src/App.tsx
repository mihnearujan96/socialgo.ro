import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const HomeSectionRedirect = lazy(() => import('@/pages/HomeSectionRedirect'))
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
            <Route path="servicii" element={<HomeSectionRedirect hash="servicii-home" />} />
            <Route path="web-development" element={<HomeSectionRedirect hash="development" />} />
            <Route path="aplicatii-web" element={<HomeSectionRedirect hash="development" />} />
            <Route path="marketing" element={<HomeSectionRedirect hash="marketing" />} />
            <Route path="fotografie" element={<HomeSectionRedirect hash="fotografie" />} />
            <Route path="videografie" element={<HomeSectionRedirect hash="videografie" />} />
            <Route path="drona" element={<HomeSectionRedirect hash="drona" />} />
            <Route path="hoteluri-business" element={<HomeSectionRedirect hash="business" />} />
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
