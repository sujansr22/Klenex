import { services } from './services'

export const durations = [
  { id: '15-days', label: '15 Days', cta: '15-Day Plan' },
  { id: '1-month', label: '1 Month', cta: '1-Month Plan' },
  { id: '3-months', label: '3 Months', cta: '3-Month Plan' },
  { id: '6-months', label: '6 Months', cta: '6-Month Plan' },
  { id: '1-year', label: '1 Year', cta: '1-Year Plan' },
]

export const packages = services.map((service) => ({
  id: service.id,
  serviceType: service.id,
  title: service.title,
  includedServices: service.includes,
  priceStatus: 'custom',
}))
