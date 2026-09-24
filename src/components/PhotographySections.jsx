import { klenexImages } from '../config/klenexImages'

export function KitchenEditorialSection() {
  return <section className="photo-story photo-story--kitchen"><div className="kitchen-image-wrap"><img src={klenexImages.editorial.kitchenCare} alt="Indian home-care professional cleaning a modern kitchen counter" loading="lazy" /></div><div className="kitchen-copy"><p className="eyebrow">CARE IN THE KITCHEN</p><h2>Every corner<br /><em>considered.</em></h2><p>Good home care lives in the details: a clear counter, a clean sink, and a kitchen ready for the next part of the day.</p><a className="text-link" href="#services">Explore house help <span>↗</span></a></div></section>
}

export function DeepCleaningSection() {
  return <section className="photo-story photo-story--deep"><figure className="deep-image"><img src={klenexImages.editorial.deepCleaning} alt="Indian professional deep-cleaning tiles in a modern bathroom" loading="lazy" /><figcaption>DEEP CLEAN</figcaption></figure><div className="deep-copy"><p className="eyebrow">DEEP CLEAN</p><h2>Beyond the<br /><em>everyday.</em></h2><p>For bathrooms, surfaces and spaces that need a considered reset, deep cleaning brings fresh attention to the places you notice most.</p><div className="deep-points"><span>Tiles &amp; shower areas</span><span>Washbasins &amp; fixtures</span><span>Detailed surface care</span></div></div></section>
}

export function HumanConnectionSection() {
  return <section className="photo-human"><div className="human-copy"><p className="eyebrow">A HUMAN SERVICE</p><h2>People who<br /><em>listen.</em></h2><p>Good care starts with a conversation. KLENEX professionals work with the rhythm, needs and character of every home.</p></div><figure className="human-image"><img src={klenexImages.editorial.humanConnection} alt="Home-care professional speaking naturally with a customer in a bright home" loading="lazy" /><figcaption>TRUST, IN PERSON</figcaption></figure></section>
}

