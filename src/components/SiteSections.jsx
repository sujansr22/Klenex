import { useState } from 'react'
import { assets } from '../config/assets'
import { klenexImages } from '../config/klenexImages'
import { services } from '../data/services'
import { faqs } from '../data/faq'

export function Hero({ onGetStarted }) {
  return <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow eyebrow--peach">PREMIUM HOME CARE <span>✦</span></p><h1>Your home.<br /><em>Beautifully</em><br />cared for.</h1><p className="hero-text">Reliable everyday house help and deep cleaning, thoughtfully delivered to your doorstep.</p><div className="hero-actions"><button className="button button--peach" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Explore services <span>↗</span></button><button className="text-link text-link--light" onClick={onGetStarted}>Get started <span>↗</span></button></div></div><div className="hero-visual"><div className="hero-circle" aria-hidden="true">CARE THAT<br />FEELS LIKE<br />HOME</div><img src={assets.hero} alt="KLENEX professional entering a home with cleaning equipment" /><div className="hero-badge"><span className="badge-dot" /><p>KLENEX CARE</p><strong>Professional service.<br />Every time.</strong></div><div className="hero-side-note">01 / 04<br /><span>DESIGNED FOR<br />MODERN LIVING</span></div></div><div className="hero-swoop" /></section>
}

export function TrustStrip() { return <section className="trust-strip"><span>EVERYDAY SUPPORT</span><i /> <span>DEEP CLEANING INCLUDED</span><i /> <span>24/7 CUSTOMER SUPPORT</span><i /> <span>NO HOURLY CHARGES</span></section> }

export function Services({ onRequest }) { return <section className="services section" id="services"><div className="section-heading"><div><p className="eyebrow">OUR SERVICES</p><h2>Everything your<br /><em>home needs.</em></h2></div><p>Choose the level of care<br />that fits your home.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.id}><div className="service-img"><img src={service.image} alt={service.title} loading="lazy" /><span>{service.number}</span></div><div className="service-content"><p className="service-kicker">{service.shortTitle}</p><h3>{service.title}</h3><p>{service.description}</p><button className="card-link" onClick={() => onRequest(service.title, '1 Month')}>Explore <span>↗</span></button></div></article>)}</div></section> }

const benefits = [['01', 'Everyday Home Support', 'Reliable everyday assistance for the household tasks that matter.'], ['02', 'Affordable Plans', 'Premium home care with practical pricing designed for everyday living.'], ['03', 'On-Location Assistance', 'Support is delivered directly at your home, where you need it.'], ['04', 'Deep Cleaning Included', 'Eligible packages include scheduled deep cleaning for up to two days.'], ['05', 'Flexible Availability', 'Choose service timings that fit naturally into your day.'], ['06', 'Dedicated Customer Care', 'Our support team is here to help with service coordination.']]
export function Benefits() { return <section className="benefits section"><div className="section-heading"><div><p className="eyebrow">WHY KLENEX</p><h2>Designed around<br /><em>your life.</em></h2></div><p className="benefit-heading-note">Care that makes room<br />for what matters.</p></div><div className="benefit-grid">{benefits.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div><figure className="benefits-edge-image"><img src={klenexImages.sections.benefits} alt="KLENEX professional washing dishes in a modern kitchen" loading="lazy" /><figcaption>CARE IN EVERY DETAIL</figcaption></figure></section> }

const carePackages = {
  basic: {
    label: 'Basic',
    services: ['Sweeping', 'Mopping', 'Washroom cleaning', 'Kitchen cleaning'],
    prices: { '1 BHK': 3999, '2 BHK': 4999, '3 BHK': 5999 },
  },
  prime: {
    label: 'Prime',
    services: ['Sweeping', 'Mopping', 'Washroom cleaning', 'Kitchen cleaning', 'Ironing', 'Window cleaning', 'Fan and ceiling cleaning', '2 deep cleans per month'],
    prices: { '1 BHK': 4999, '2 BHK': 5999, '3 BHK': 6999 },
  },
}

const homeSizes = ['1 BHK', '2 BHK', '3 BHK']
const careDurations = [
  { id: '1-month', label: '1 Month', months: 1 },
  { id: '3-months', label: '3 Months', months: 3 },
  { id: '6-months', label: '6 Months', months: 6 },
  { id: '12-months', label: '12 Months', months: 12 },
]

export function Packages({ onRequest }) {
  const [packageId, setPackageId] = useState('basic')
  const [homeSize, setHomeSize] = useState('1 BHK')
  const [durationId, setDurationId] = useState('1-month')
  const selectedPackage = carePackages[packageId]
  const selectedDuration = careDurations.find((duration) => duration.id === durationId)
  const monthlyPrice = selectedPackage.prices[homeSize]
  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`

  return <section className="packages section" id="packages">
    <div className="packages-intro">
      <p className="eyebrow eyebrow--peach">BUILD YOUR CARE PLAN</p>
      <h2>Choose your<br /><em>care.</em></h2>
      <p>A package that fits your home, your rhythm and the way you like to live.</p>
      <div className="package-image"><img src={assets.packageImages.kitchen} alt="Clean, bright kitchen" loading="lazy" /><span>CURATED FOR YOU</span></div>
    </div>
    <div className="package-panel">
      <div className="control-group">
        <label>01 <span>SELECT PACKAGE</span></label>
        <div className="segmented">
          {Object.entries(carePackages).map(([id, packageOption]) => <button className={packageId === id ? 'is-selected' : ''} key={id} onClick={() => setPackageId(id)}>{packageOption.label}</button>)}
        </div>
      </div>
      <div className="control-group">
        <label>02 <span>HOME SIZE</span></label>
        <div className="segmented home-size-options">
          {homeSizes.map((size) => <button className={homeSize === size ? 'is-selected' : ''} key={size} onClick={() => setHomeSize(size)}>{size}</button>)}
        </div>
      </div>
      <div className="control-group">
        <label>03 <span>DURATION</span></label>
        <div className="duration-grid">
          {careDurations.map((duration) => <button className={durationId === duration.id ? 'is-selected' : ''} key={duration.id} onClick={() => setDurationId(duration.id)}>{duration.label}</button>)}
        </div>
      </div>
      <div className="package-summary">
        <div className="summary-selection">
          <p className="eyebrow">YOUR SELECTION</p>
          <h3>{selectedPackage.label}</h3>
          <strong>{homeSize} · {selectedDuration.label}</strong>
          <div className="summary-monthly"><span>PRICE PER MONTH</span><b>{formatPrice(monthlyPrice)}<small>/month</small></b></div>
        </div>
        <div className="summary-detail">
          <p>INCLUDES</p>
          <ul>{selectedPackage.services.map((service) => <li key={service}>✓ {service}</li>)}</ul>
        </div>
        <div className="summary-action">
          <span>{selectedPackage.label} · {homeSize}</span>
          <button className="button button--peach" onClick={() => onRequest(`${selectedPackage.label} · ${homeSize}`, selectedDuration.label)}>Request this plan <span>↗</span></button>
        </div>
      </div>
    </div>
  </section>
}

export function HowItWorks() { const steps = [['01', 'Choose your plan', 'Select the home care package that suits your needs.'], ['02', 'Tell us about your home', 'Share your location, requirements and preferred schedule.'], ['03', 'We arrange your service', 'Our team coordinates the service and on-location support.'], ['04', 'Enjoy a better-cared-for home', 'Your household gets consistent professional care without the daily hassle.']]; return <section className="process section" id="how-it-works"><div className="section-heading"><div><p className="eyebrow">HOW IT WORKS</p><h2>Care, made<br /><em>simple.</em></h2></div><p>From the first hello<br />to everyday ease.</p></div><div className="process-grid">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section> }

export function Quality() { return <section className="quality section" id="quality"><div><p className="eyebrow eyebrow--peach">THE QUALITY PROMISE</p><h2>Your home<br />deserves <em>consistency.</em></h2></div><div className="quality-copy"><p>KLENEX is built around dependable service, clear communication and a better customer experience — from the first interaction to everyday home care.</p><div className="quality-points"><span>Quality checks</span><span>Customer feedback</span><span>Service supervision</span><span>Support availability</span></div></div></section> }

export function Experience() { return <section className="experience section"><div className="experience-copy"><p className="eyebrow">THE KLENEX DIFFERENCE</p><h2>Less household hassle.<br /><em>More time for life.</em></h2><p>Thoughtful care creates a little more space in every day. That is the difference we are here to make.</p><a className="text-link" href="#packages">Find your package <span>↗</span></a></div><div className="experience-image"><img src={assets.experience} alt="Professional home care in a light-filled living space" loading="lazy" /><div className="stat-card stat-card--top"><strong>24/7</strong><span>Customer<br />support</span></div><div className="stat-card stat-card--bottom"><strong>NO HOURLY</strong><span>Charge<br />tracking</span></div></div></section> }

export function Testimonials() { const slogans = [['Professional home care, made simple.', 'EVERYDAY CARE'], ['Thoughtful support for the way you live.', 'THOUGHTFUL SERVICE'], ['A better-cared-for home, every day.', 'THE KLENEX WAY']]; return <section className="testimonials section"><div className="section-heading"><div><p className="eyebrow">THE KLENEX WAY</p><h2>Care that feels<br /><em>different.</em></h2></div><p>Clear service.<br />Thoughtful care.</p></div><div className="quotes">{slogans.map(([slogan, label], index) => <article key={slogan} className={index === 1 ? 'quote quote--featured' : 'quote'}><span>0{index + 1}</span><blockquote>{slogan}</blockquote><p>{label}</p></article>)}</div></section> }

export function FAQ() { const [active, setActive] = useState(0); return <section className="faq section" id="faq"><div className="faq-title"><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Good to<br /><em>know.</em></h2><p>Everything you need to feel clear and comfortable before you begin.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? 'is-open' : ''}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{question}</span><b>{active === index ? '−' : '+'}</b></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section> }

export function FinalCta({ onGetStarted }) { return <section className="final-cta"><div><p className="eyebrow eyebrow--peach">A BETTER WAY TO COME HOME</p><h2>Your home.<br /><em>Our care.</em></h2><p>Choose a KLENEX package and make everyday home care simpler.</p><button className="button button--peach" onClick={onGetStarted}>Get started <span>↗</span></button></div><div className="cta-mark">K</div></section> }
