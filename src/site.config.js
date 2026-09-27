// ============================================================
//  ASTHA PROVIDES - SITE CONFIG
//  Everything you are likely to change lives in this one file.
// ============================================================

export const site = {
  name: 'Astha Provides',
  tagline: 'Have Astha on us.',

  // ------------------------------------------------------------
  // WHATSAPP  (PLACEHOLDER NUMBER - change this)
  // Digits only, country code first, no + / spaces / dashes.
  // Example for India: '919876543210'
  // The floating button and the contact form both read this value.
  // ------------------------------------------------------------
  whatsappNumber: '918910358939',
  whatsappMessage: 'Hi Astha Provides, I would like to enquire about your services.',

  // ------------------------------------------------------------
  // HEADER PICTURE  (changeable)
  // Drop any image into public/images/ and point this at it.
  // This one value drives the banner on every page.
  // ------------------------------------------------------------
  headerImage: '/images/hero.png',

  nav: [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ],

  // ------------------------------------------------------------
  // SERVICES
  // ------------------------------------------------------------
  services: [
    {
      title: 'VAPT for Websites',
      text: 'Vulnerability assessment and penetration testing for your web applications. We find the weaknesses before someone else does, then give you a clear report ranked by real risk.',
      image: '/images/security.png',
    },
    {
      title: 'IT Support',
      text: 'Ongoing support for your devices, software and network. Helpdesk, maintenance, troubleshooting and setup, so your team keeps working instead of fighting the machines.',
      image: '/images/support.png',
    },
    {
      title: 'Web Development',
      text: 'Websites and web software built to load fast, rank well and stay easy to update. From a single business page to a full custom platform.',
      image: '/images/webdev.png',
    },
    {
      title: 'Sales',
      text: 'Software and hardware sourcing and sales, licensed and warranted. We help you pick what actually fits your workload and your budget.',
      image: '/images/servers.png',
    },
  ],

  // ------------------------------------------------------------
  // GALLERY  (PLACEHOLDER IMAGES - replace them)
  // Swap the files in public/images/, or change the paths below.
  // ------------------------------------------------------------
  gallery: [
    { image: '/images/security.png', title: 'Security testing', caption: 'PLACEHOLDER image - replace with your own work.' },
    { image: '/images/support.png', title: 'On-site support', caption: 'PLACEHOLDER image - replace with your own work.' },
    { image: '/images/webdev.png', title: 'Development', caption: 'PLACEHOLDER image - replace with your own work.' },
    { image: '/images/servers.png', title: 'Infrastructure', caption: 'PLACEHOLDER image - replace with your own work.' },
  ],

  // ------------------------------------------------------------
  // TESTIMONIALS  (SAMPLE DATA - replace every entry)
  // These are invented names and quotes used only to show the layout.
  // Do not publish them as they are.
  // ------------------------------------------------------------
  testimonials: [
    {
      name: 'SAMPLE - Customer Name',
      role: 'SAMPLE - Company / Role',
      quote: 'This is placeholder copy. Replace it with a real review from an actual customer before the site goes live.',
    },
    {
      name: 'SAMPLE - Customer Name',
      role: 'SAMPLE - Company / Role',
      quote: 'This is placeholder copy. Replace it with a real review from an actual customer before the site goes live.',
    },
    {
      name: 'SAMPLE - Customer Name',
      role: 'SAMPLE - Company / Role',
      quote: 'This is placeholder copy. Replace it with a real review from an actual customer before the site goes live.',
    },
  ],

  // ------------------------------------------------------------
  // CONTACT  (PLACEHOLDER DETAILS - replace all of these)
  // ------------------------------------------------------------
  contact: {
    phone: '+91 8910358939',
    email: 'support@ASTHA.com',
    address: 'Street address, City, State, PIN',
    hours: [
      { days: 'Monday - Saturday', time: '10:00 - 19:00' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
}

export function whatsappLink(message) {
  const text = encodeURIComponent(message ?? site.whatsappMessage)
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}
