import { useState, useEffect } from 'react'
import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import HomePage      from './pages/HomePage'
import AboutPage     from './pages/AboutPage'
import EmployersPage from './pages/EmployersPage'
import CandidatesPage from './pages/CandidatesPage'
import SectorsPage   from './pages/SectorsPage'
import ContactPage   from './pages/ContactPage'

const PAGE_TITLES = {
  home:       'India Executive Search — Hospitality Leadership Advisory',
  about:      'About — India Executive Search',
  employers:  'For Employers — India Executive Search',
  candidates: 'Leadership Opportunities — India Executive Search',
  sectors:    'Sectors — India Executive Search',
  contact:    'Contact — India Executive Search',
}

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    document.title = PAGE_TITLES[page] ?? PAGE_TITLES.home
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'about':      return <AboutPage      navigate={navigate} />
      case 'employers':  return <EmployersPage  navigate={navigate} />
      case 'candidates': return <CandidatesPage navigate={navigate} />
      case 'sectors':    return <SectorsPage    navigate={navigate} />
      case 'contact':    return <ContactPage    navigate={navigate} />
      default:           return <HomePage       navigate={navigate} />
    }
  }

  return (
    <div className="bg-surface font-sans text-pearl overflow-x-hidden">
      <Navbar currentPage={page} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} currentPage={page} />
    </div>
  )
}
