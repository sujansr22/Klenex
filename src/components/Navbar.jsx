import { useEffect, useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import { assets } from '../config/assets'

const links = [
  ['Services', 'services'],
  ['Packages', 'packages'],
  ['How it works', 'how-it-works'],
  ['About', 'about'],
  ['FAQ', 'faq'],
]

export default function Navbar({ onGetStarted }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); goTo('top') }}>
        <img src={assets.logo} alt={`${siteConfig.brandName} home`} />
      </a>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Primary navigation">
        {links.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
        <button className="nav-cta nav-cta--mobile" onClick={() => { setOpen(false); onGetStarted() }}>Get started <span>↗</span></button>
      </nav>
      <button className="nav-cta nav-cta--desktop" onClick={onGetStarted}>Get started <span>↗</span></button>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  )
}
