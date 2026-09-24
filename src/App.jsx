import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EnquiryModal from './components/EnquiryModal'
import Footer from './components/Footer'
import {
  DeepCleaningSection,
  KitchenEditorialSection,
} from './components/PhotographySections'
import {
  Benefits,
  Experience,
  FAQ,
  FinalCta,
  Hero,
  HowItWorks,
  Packages,
  Quality,
  Services,
  Testimonials,
  TrustStrip,
} from './components/SiteSections'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selection, setSelection] = useState({ service: 'House Help', duration: '1 Month' })

  const openEnquiry = (service = 'House Help', duration = '1 Month') => {
    setSelection({ service, duration })
    setModalOpen(true)
  }

  return (
    <div className="app-shell">
      <Navbar onGetStarted={() => openEnquiry()} />
      <main>
        <Hero onGetStarted={() => openEnquiry()} />
        <TrustStrip />
        <KitchenEditorialSection />
        <Services onRequest={openEnquiry} />
        <Benefits />
        <DeepCleaningSection />
        <Packages onRequest={openEnquiry} />
        <HowItWorks />
        <Quality />
        <Experience />
        <Testimonials />
        <FAQ />
        <FinalCta onGetStarted={() => openEnquiry()} />
      </main>
      <Footer />
      {modalOpen && <EnquiryModal selection={selection} onClose={() => setModalOpen(false)} />}
    </div>
  )
}

export default App
