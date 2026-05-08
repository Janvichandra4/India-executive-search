import { useState, useEffect } from 'react'
import Navbar                    from './components/Navbar'
import HeroSection               from './components/HeroSection'
import AboutSection              from './components/AboutSection'
import ExecutivePlacementsSection from './components/ExecutivePlacementsSection'
import ServicesSection           from './components/ServicesSection'
import NoVolumeSection           from './components/NoVolumeSection'
import SectorsSection            from './components/SectorsSection'
import WhyUsSection              from './components/WhyUsSection'
import FounderSection            from './components/FounderSection'
import ProcessSection            from './components/ProcessSection'
import TestimonialsSection       from './components/TestimonialsSection'
import ContactSection            from './components/ContactSection'
import Footer                    from './components/Footer'
import LeadershipOpportunitiesPage from './pages/LeadershipOpportunitiesPage'

export default function App() {
  const [page, setPage] = useState('home')

  const goOpportunities = () => { setPage('opportunities'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goHome          = () => { setPage('home');          window.scrollTo({ top: 0, behavior: 'smooth' }) }

  useEffect(() => {
    if (page === 'opportunities') {
      document.title = 'Leadership Opportunities — India Executive Search'
    } else {
      document.title = 'India Executive Search — Hospitality Leadership Advisory'
    }
  }, [page])

  if (page === 'opportunities') {
    return <LeadershipOpportunitiesPage onBack={goHome} />
  }

  return (
    <div className="bg-surface font-sans text-pearl overflow-x-hidden">
      <Navbar onNavigateOpportunities={goOpportunities} />
      <main>
        <HeroSection             onNavigateOpportunities={goOpportunities} />
        <AboutSection />
        <ExecutivePlacementsSection />
        <ServicesSection />
        <NoVolumeSection />
        <SectorsSection />
        <WhyUsSection />
        <FounderSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer onNavigateOpportunities={goOpportunities} />
    </div>
  )
}
