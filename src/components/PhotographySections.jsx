import { klenexImages } from '../config/klenexImages'

export function KitchenEditorialSection() {
  return <section className="photo-story photo-story--kitchen"><div className="kitchen-image-wrap"><img src={klenexImages.editorial.kitchenCare} alt="Indian home-care professional cleaning a modern kitchen counter" loading="lazy" /></div><div className="kitchen-copy"><p className="eyebrow">CARE IN THE KITCHEN</p><h2>Every corner<br /><em>considered.</em></h2><p>Good home care lives in the details: a clear counter, a clean sink, and a kitchen ready for the next part of the day.</p><a className="text-link" href="#services">Explore house help <span>↗</span></a></div></section>
}

export function DeepCleaningSection() {
  return <section className="photo-story photo-story--deep"><figure className="deep-image"><img src={klenexImages.editorial.deepCleaning} alt="Indian professional deep-cleaning tiles in a modern bathroom" loading="lazy" /><figcaption>DEEP CLEAN</figcaption></figure><div className="deep-copy"><p className="eyebrow">DEEP CLEAN</p><h2>Beyond the<br /><em>everyday.</em></h2><p>For bathrooms, surfaces and spaces that need a considered reset, deep cleaning brings fresh attention to the places you notice most.</p><div className="deep-points"><span>Tiles &amp; shower areas</span><span>Washbasins &amp; fixtures</span><span>Detailed surface care</span></div></div></section>
}

