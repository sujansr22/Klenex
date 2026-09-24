import { assets } from '../config/assets'
import { siteConfig } from '../config/siteConfig'

export default function Footer() {
  const links = [['Home', 'top'], ['Services', 'services'], ['Packages', 'packages'], ['How it works', 'how-it-works'], ['About', 'about'], ['FAQ', 'faq']]
  return <footer className="footer"><div className="footer-top"><div className="footer-brand"><img src={assets.logo} alt="KLENEX" /><p>{siteConfig.tagline}</p></div><div className="footer-nav"><p className="eyebrow eyebrow--peach">EXPLORE</p>{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-contact"><p className="eyebrow eyebrow--peach">CONTACT</p><span>{siteConfig.contact.phone}</span><span>{siteConfig.contact.email}</span><span>{siteConfig.contact.location}</span></div><div className="footer-social"><p className="eyebrow eyebrow--peach">FOLLOW ALONG</p><a href={siteConfig.social.instagram}>Instagram ↗</a><a href={siteConfig.social.facebook}>Facebook ↗</a><a href={siteConfig.social.linkedin}>LinkedIn ↗</a></div></div><div className="footer-bottom"><span>© 2026 KLENEX. All rights reserved.</span><span>Privacy policy &nbsp;&nbsp; Terms of service</span></div></footer>
}
