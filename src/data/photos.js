// ─────────────────────────────────────────────────────────────
//  Photography page content. This is the only file you need to
//  edit to add photos.
//
//  HOW TO ADD A PHOTO
//  1. Export it as JPG or WebP, about 2000px on the long side and
//     under ~500 KB.
//  2. Drop it in  public/photos/  (e.g. public/photos/lima-sunset.jpg)
//  3. Add an entry to the `photos` list below.
//
//  Fields
//    src       (required) path inside public/, starting with /photos/
//    title     (required) short name shown in the lightbox
//    category  (required) used for the filter chips, e.g. 'Street'
//    width,
//    height    (recommended) the pixel size, keeps the grid from
//              jumping while images load
//    location, date, camera, lens, settings   (optional) shown in
//              the lightbox caption
//    thumb     (optional) smaller version for the grid, e.g. 800px
//
//  Example:
//  {
//    src: '/photos/lima-sunset.jpg',
//    thumb: '/photos/thumbs/lima-sunset.jpg',
//    title: 'Sunset over the Costa Verde',
//    category: 'Landscape',
//    location: 'Miraflores, Lima',
//    date: '2026-11',
//    camera: 'Your camera',
//    lens: '35mm f/1.8',
//    settings: 'f/8 · 1/250s · ISO 100',
//    width: 2000,
//    height: 1333,
//  },
// ─────────────────────────────────────────────────────────────

// Main pitch at the top of the page
export const intro =
  "I'm a photographer starting out in Peru, focused on small events and products. " +
  "I'm building my portfolio and taking my first bookings."

// Second paragraph: the software engineering background as a bonus
export const sweNote =
  "By day I'm a software engineer, so I bring the same care for detail to every shoot: " +
  'clear communication, photos delivered on time, and files sized and ready for your website or social media.'

// What you offer. Icons are Bootstrap Icons names: https://icons.getbootstrap.com
export const services = [
  {
    icon: 'bi-stars',
    title: 'Small events',
    desc: 'Birthdays, gatherings and local events, captured naturally.',
  },
  {
    icon: 'bi-bag',
    title: 'Products & brands',
    desc: 'Clean product shots and content for online stores and small businesses.',
  },
]

// Booking call-to-action
export const booking = {
  label: 'Book a shoot',
  email: 'ivanmoran.dev@gmail.com',
  subject: 'Photography booking',
  note: 'Starter rates while I build my portfolio.',
}

export const photos = [
  // Add your photos here, newest first.
]
