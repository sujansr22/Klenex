const photo = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`

// Replace any URL here with an optimized local WebP or AVIF from public/images/klenex.
export const klenexImages = {
  hero: '/images/klenex/hero/ChatGPT%20Image%20Sep%2024,%202026,%2010_53_34%20AM.png',
  home: {
    kitchen: photo('photo-1556911220-e15b29be8c8f'),
    bathroom: photo('photo-1552321554-5fefe8c9ef14'),
    bedroom: photo('photo-1616486338812-3dadae4b4ace'),
  },
  services: {
    sweeping: photo('photo-1581578731548-c64695cc6952'),
    mopping: photo('photo-1581578731548-c64695cc6952', 1200),
    vacuuming: photo('photo-1558317374-067fb5f30001'),
    kitchen: photo('photo-1556911220-e15b29be8c8f'),
    bathroom: photo('photo-1584622650111-993a426fbf0a'),
    fan: photo('photo-1581578731548-c64695cc6952', 1200),
    laundry: photo('photo-1517677208171-0bc6725a3e60'),
    ironing: photo('photo-1487412720507-e7ab37603c6f'),
    bedsheet: photo('photo-1618221195710-dd6b41faaea6'),
    deepCleaning: photo('photo-1584622650111-993a426fbf0a'),
  },
  workers: {
    female: photo('photo-1581578731548-c64695cc6952'),
    male: photo('photo-1581578731548-c64695cc6952', 1200),
    customerMoment: photo('photo-1600566753086-00f18fb6b3ea'),
  },
  sections: {
    careInMotion: photo('photo-1600566753190-17f0baa2a6c3', 1800),
    quality: photo('photo-1581578731548-c64695cc6952'),
    experience: photo('photo-1600566753086-00f18fb6b3ea'),
  },
  editorial: {
    kitchenCare: '/images/klenex/editorial/ChatGPT%20Image%20Sep%2024,%202026,%2011_17_26%20AM.png',
    deepCleaning: photo('photo-1584622650111-993a426fbf0a', 1600),
    humanConnection: photo('photo-1600566753086-00f18fb6b3ea', 1800),
  },
}
