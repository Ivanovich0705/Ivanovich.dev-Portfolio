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
  'Fotografo autodidacta con ganas de dar el salto a la fotografia profesional, ' +
  'especialmente en eventos y fotografia corporativa. ' +
  'Estoy armando mi portafolio y buscando mis primeras oportunidades.'

// Second paragraph: the software engineering background as a bonus
export const sweNote =
  'De dia trabajo como ingeniero de software en consultoria para empresas, ' +
  'asi que conozco el entorno corporativo: puntualidad, trato profesional y entregas a tiempo.'

// What you offer. Icons are Bootstrap Icons names: https://icons.getbootstrap.com
export const services = [
  {
    icon: 'bi-stars',
    title: 'Eventos',
    desc: 'Fiestas, reuniones y eventos locales, capturados con naturalidad.',
  },
  {
    icon: 'bi-bag',
    title: 'Productos y marcas',
    desc: 'Fotos de producto limpias y contenido para tiendas online y negocios locales.',
  },
]

// "Mi equipo" section. Avoid accents and ñ: the site font draws them as capitals.
// Icons are Bootstrap Icons names: https://icons.getbootstrap.com
export const gear = [
  {
    icon: 'bi-camera',
    type: 'Camara',
    name: 'Sony a6400',
    desc: 'Mirrorless APS-C de 24 MP.',
  },
  {
    icon: 'bi-record-circle',
    type: 'Lente',
    name: 'Sigma 18-50mm f/2.8 DC DN Contemporary',
    desc: 'Apertura f/2.8 constante y nitido.',
  },
  {
    icon: 'bi-sliders',
    type: 'Edicion',
    name: 'Adobe Lightroom',
    desc: 'Manejo basico: revelado, ajustes de color y exportacion.',
  },
]

// Booking call-to-action
export const booking = {
  label: 'Reserva una sesion',
  email: 'ivanmoran.dev@gmail.com',
  subject: 'Reserva de sesion de fotos',
  note: 'Tarifas de lanzamiento mientras armo mi portafolio.',
}

export const photos = [
  // Add your photos here, newest first.
  {
    src: '/photos/spain-towers-web.jpg',
    thumb: '/photos/thumbs/spain-towers.jpg',
    title: 'Torres Venecianas',
    category: 'Ciudad',
    location: 'Barcelona',
    date: '2026-06',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: '50mm · f/4.5 · 1/1000s · ISO 100',
    width: 2000,
    height: 1333,
  },
  {
    src: '/photos/ibiza-plane-web.jpg',
    thumb: '/photos/thumbs/ibiza-plane.jpg',
    title: 'Ibiza desde Arriba',
    category: 'Paisaje',
    location: 'Ibiza',
    date: '2026-06',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: '18mm · f/5.6 · 1/640s · ISO 100',
    width: 2000,
    height: 1333,
  },
  {
    src: '/photos/montjuic-web.jpg',
    thumb: '/photos/thumbs/montjuic.jpg',
    title: 'Palacio Nacional de Montjuic',
    category: 'Arquitectura',
    location: 'Barcelona',
    date: '2026-06',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: '50mm · f/13 · 1/320s · ISO 500',
    width: 2000,
    height: 1333,
  },
  {
    src: '/photos/bsas-sunset-web.jpg',
    thumb: '/photos/thumbs/bsas-sunset.jpg',
    title: 'Atardecer en la ciudad',
    category: 'Ciudad',
    location: 'Buenos Aires, Argentina',
    date: '2026-02',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: 'f/2.8 · 1/100s · ISO 100',
    width: 1500,
    height: 2000,
  },
  {
    src: '/photos/bsas-web.jpg',
    thumb: '/photos/thumbs/bsas.jpg',
    title: 'Esquina de Buenos Aires',
    category: 'Arquitectura',
    location: 'Buenos Aires, Argentina',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    date: '2026-02',
    camera: 'Sony a6400',
    settings: 'f/2.8 · 1/100s · ISO 100',
    width: 1500,
    height: 2000,
  },
  {
    src: '/photos/sunset-web.jpg',
    thumb: '/photos/thumbs/sunset.jpg',
    title: 'Atardecer en el mar',
    category: 'Paisaje',
    location: 'Asia, Peru',
    date: '2026-01',
    camera: 'Sony a6400',
    lens: 'Sony E PZ 16-50mm f/3.5-5.6 OSS II',
    settings: '50mm · f/9 · 1/100s · ISO 100',
    width: 2000,
    height: 1216,
  },
  {
    src: '/photos/beach-sunset-web.jpg',
    thumb: '/photos/thumbs/beach-sunset.jpg',
    title: 'Palmera al anochecer',
    category: 'Paisaje',
    date: '2025-08',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: 'f/2.8 · 1.5s · ISO 4000',
    width: 1500,
    height: 2000,
  },
  {
    src: '/photos/alexanderplatz-web.jpg',
    thumb: '/photos/thumbs/alexanderplatz.jpg',
    title: 'Torre de TV, Alexanderplatz',
    category: 'Ciudad',
    location: 'Berlin, Alemania',
    date: '2026-06',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: '18mm · f/2.8 · 1/200s · ISO 8000',
    width: 1329,
    height: 1994,
  },
  {
    src: '/photos/berlin-church-web.jpg',
    thumb: '/photos/thumbs/berlin-church.jpg',
    title: 'Iglesia de Santa Maria',
    category: 'Arquitectura',
    location: 'Berlin, Alemania',
    date: '2026-06',
    camera: 'Sony a6400',
    lens: 'Sigma 18-50mm f/2.8 DC DN',
    settings: '35mm · f/5.6 · 1/500s · ISO 100',
    width: 1329,
    height: 2000,
  },
]
