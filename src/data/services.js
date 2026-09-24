import { assets } from '../config/assets'

export const services = [
  {
    id: 'house-help',
    number: '01',
    title: 'House Help',
    shortTitle: 'Everyday care',
    description: 'Reliable everyday assistance for the tasks that keep your home running smoothly.',
    image: assets.services.houseHelp,
    includes: ['Kitchen cleaning', 'Sweeping', 'Mopping', 'Bedsheet changing', 'Ironing'],
  },
  {
    id: 'deep-cleaning',
    number: '02',
    title: 'Deep Cleaning',
    shortTitle: 'A considered reset',
    description: 'A thorough refresh for the spaces that need more attention.',
    image: assets.services.deepCleaning,
    includes: ['Bathroom cleaning', 'Roof / ceiling cleaning', 'Pest-control support', 'Laundry'],
  },
  {
    id: 'complete-care',
    number: '03',
    title: 'Complete Care',
    shortTitle: 'The whole picture',
    description: 'Complete home care combining everyday assistance with scheduled deep cleaning.',
    image: assets.services.combined,
    includes: ['Kitchen cleaning', 'Sweeping', 'Mopping', 'Bedsheet changing', 'Ironing', 'Bathroom cleaning', 'Roof / ceiling cleaning', 'Pest-control support', 'Laundry'],
  },
]
