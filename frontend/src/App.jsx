import Navbar              from './components/Navbar'
import HeroSection         from './components/HeroSection'
import AboutSection        from './components/AboutSection'
import ServicesSection     from './components/ServicesSection'
import FounderSection      from './components/FounderSection'
import ProcessSection      from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection      from './components/ContactSection'
import Footer              from './components/Footer'

export default function App() {
  return (
    <div className="bg-surface font-sans text-pearl overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FounderSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
