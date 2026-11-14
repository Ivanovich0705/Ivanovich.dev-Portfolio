<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import sectionTitle from '../components/sectionTitle.vue'
import { intro, sweNote, services, booking, photos } from '../data/photos.js'

const bookingHref = `mailto:${booking.email}?subject=${encodeURIComponent(booking.subject)}`

const ALL = 'All'
const activeCategory = ref(ALL)

const categories = computed(() => {
  const unique = [...new Set(photos.map(p => p.category).filter(Boolean))]
  return [ALL, ...unique]
})

const visiblePhotos = computed(() =>
  activeCategory.value === ALL
    ? photos
    : photos.filter(p => p.category === activeCategory.value)
)

// Empty frames shown until the first photos are added (aspect ratios vary to look like a real grid)
const placeholderFrames = ['3 / 2', '2 / 3', '1 / 1', '2 / 3', '3 / 2', '4 / 5']

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function captionFor(photo) {
  const place = [photo.location, photo.date].filter(Boolean).map(escapeHtml).join(' · ')
  const gear = [photo.camera, photo.lens, photo.settings].filter(Boolean).map(escapeHtml).join(' · ')
  return [
    place && `<p class="photo-caption-place">${place}</p>`,
    gear && `<p class="photo-caption-gear">${gear}</p>`,
  ].filter(Boolean).join('')
}

let lightbox = null

onMounted(() => {
  lightbox = GLightbox({
    elements: [],
    loop: true,
    touchNavigation: true,
    descPosition: 'bottom',
  })
})

onBeforeUnmount(() => {
  lightbox?.destroy()
  lightbox = null
})

function openPhoto(index) {
  if (!lightbox) return
  lightbox.setElements(visiblePhotos.value.map(photo => ({
    href: photo.src,
    type: 'image',
    title: escapeHtml(photo.title),
    description: captionFor(photo),
    alt: photo.title,
  })))
  lightbox.openAt(index)
}
</script>

<template>
  <section id="photography">
    <RouterLink to="/" class="back-link" data-aos="fade-up">
      <i class="bi bi-arrow-left"></i> back home
    </RouterLink>

    <sectionTitle title="/ photography"/>

    <p class="photo-intro" data-aos="fade-up" data-aos-delay="100">{{ intro }}</p>
    <p class="photo-swe-note" data-aos="fade-up" data-aos-delay="150">
      <i class="bi bi-code-slash"></i>
      <span>{{ sweNote }}</span>
    </p>

    <!-- Services -->
    <div class="services">
      <div
        v-for="(service, index) in services"
        :key="service.title"
        class="service-card"
        data-aos="fade-up"
        :data-aos-delay="200 + index * 80"
      >
        <i class="bi" :class="service.icon"></i>
        <div class="service-title">{{ service.title }}</div>
        <div class="service-desc">{{ service.desc }}</div>
      </div>
    </div>

    <!-- Booking call-to-action -->
    <div class="booking" data-aos="fade-up" data-aos-delay="300">
      <a :href="bookingHref" class="booking-button">
        <i class="bi bi-camera"></i>&nbsp; {{ booking.label }}
      </a>
      <span v-if="booking.note" class="booking-note">{{ booking.note }}</span>
    </div>

    <h2 class="gallery-heading" data-aos="fade-up">Recent work</h2>

    <!-- Gallery -->
    <template v-if="photos.length">
      <div class="photo-meta" data-aos="fade-up" data-aos-delay="150">
        {{ photos.length }} {{ photos.length === 1 ? 'photo' : 'photos' }}
      </div>

      <div v-if="categories.length > 2" class="filter-chips" role="toolbar" aria-label="Filter photos by category" data-aos="fade-up" data-aos-delay="200">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="chip"
          :class="{ active: category === activeCategory }"
          :aria-pressed="category === activeCategory"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <TransitionGroup name="photo" tag="div" class="photo-grid">
        <figure v-for="(photo, index) in visiblePhotos" :key="photo.src" class="photo-card">
          <button type="button" class="photo-button" :aria-label="`Open ${photo.title}`" @click="openPhoto(index)">
            <img
              :src="photo.thumb || photo.src"
              :alt="photo.title"
              :width="photo.width"
              :height="photo.height"
              loading="lazy"
              decoding="async"
            >
            <figcaption class="photo-overlay">
              <span class="photo-title">{{ photo.title }}</span>
              <span v-if="photo.location" class="photo-location">
                <i class="bi bi-geo-alt"></i> {{ photo.location }}
              </span>
            </figcaption>
          </button>
        </figure>
      </TransitionGroup>
    </template>

    <!-- Empty state until the first photos are added -->
    <template v-else>
      <div class="empty-note" data-aos="fade-up" data-aos-delay="150">
        <i class="bi bi-camera"></i>
        <div>
          <div class="empty-title">First roll in progress</div>
          <div class="empty-sub">Photos are on the way. Check back soon.</div>
        </div>
      </div>

      <div class="photo-grid" aria-hidden="true">
        <div
          v-for="(ratio, index) in placeholderFrames"
          :key="index"
          class="photo-placeholder"
          :style="{ aspectRatio: ratio }"
          data-aos="fade-up"
          :data-aos-delay="200 + index * 60"
        >
          <i class="bi bi-image"></i>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
#photography {
  padding-top: 60px;
  padding-left: 15%;
  padding-right: 15%;
  min-height: 80vh;
  font-family: "NTR", sans-serif;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 18px;
  color: var(--slate);
  text-decoration: none;
  transition: color 0.2s ease;
}
.back-link:hover {
  color: var(--green-bright);
}

.photo-intro {
  max-width: 680px;
  font-size: 24px;
  color: var(--light-slate);
  margin: -12px 0 12px;
}

.photo-swe-note {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  max-width: 680px;
  font-size: 19px;
  color: var(--slate);
  margin: 0 0 32px;
}
.photo-swe-note i {
  color: var(--green-bright);
  font-size: 20px;
  line-height: 1.3;
}

/* Services */
.services {
  display: grid;
  /* Cards share the row equally, however many services there are */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}
.service-card {
  padding: 20px;
  border-radius: 12px;
  background-color: var(--light-navy);
  border: 1px solid transparent;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.service-card:hover {
  border-color: var(--lightest-navy);
  transform: translateY(-3px);
}
.service-card > i {
  font-size: 26px;
  color: var(--green-bright);
}
.service-title {
  margin-top: 8px;
  font-size: 22px;
  font-weight: bold;
  color: var(--lightest-slate);
}
.service-desc {
  font-size: 17px;
  color: var(--slate);
}

/* Booking */
.booking {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 64px;
}
.booking-button {
  font-size: 22px;
  font-weight: bolder;
  padding: 10px 30px;
  color: var(--green-bright);
  text-decoration: none;
  border: 1px solid var(--green-bright);
  border-radius: 4px;
  transition: background-color 0.2s ease;
}
.booking-button:hover {
  background-color: var(--lightest-navy);
  color: var(--green-bright);
}
.booking-note {
  font-size: 17px;
  color: var(--slate);
}

.gallery-heading {
  font-family: "NTR", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: var(--lightest-slate);
  margin-bottom: 16px;
}

.photo-meta {
  font-size: 16px;
  color: var(--slate);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

/* Filter chips */
.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}
.chip {
  font-family: "NTR", sans-serif;
  font-size: 18px;
  line-height: 1;
  padding: 8px 16px;
  color: var(--light-slate);
  background: transparent;
  border: 1px solid var(--lightest-navy);
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}
.chip:hover {
  color: var(--green-bright);
  border-color: var(--green-bright);
}
.chip.active {
  color: var(--navy);
  background-color: var(--green-bright);
  border-color: var(--green-bright);
}
.chip:focus-visible,
.photo-button:focus-visible {
  outline: 2px solid var(--green-bright);
  outline-offset: 3px;
}

/* Masonry grid with CSS columns */
.photo-grid {
  column-count: 3;
  column-gap: 16px;
}

.photo-card {
  break-inside: avoid;
  margin: 0 0 16px;
}

.photo-button {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--light-navy);
  cursor: zoom-in;
}

.photo-button img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.photo-overlay {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 32px 14px 12px;
  text-align: left;
  background: linear-gradient(to top, rgba(2, 12, 27, 0.85), rgba(2, 12, 27, 0));
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.photo-title {
  font-size: 20px;
  font-weight: bold;
  color: var(--lightest-slate);
}
.photo-location {
  font-size: 15px;
  color: var(--green-bright);
}

.photo-button:hover img,
.photo-button:focus-visible img {
  transform: scale(1.04);
  filter: brightness(0.9);
}
.photo-button:hover .photo-overlay,
.photo-button:focus-visible .photo-overlay {
  opacity: 1;
  transform: translateY(0);
}

/* Filter transitions */
.photo-enter-active,
.photo-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.photo-enter-from,
.photo-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

/* Empty state */
.empty-note {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  padding: 16px 20px;
  max-width: 480px;
  border: 1px solid var(--lightest-navy);
  border-left: 3px solid var(--green-bright);
  border-radius: 8px;
  background-color: var(--light-navy);
}
.empty-note > i {
  font-size: 30px;
  color: var(--green-bright);
}
.empty-title {
  font-size: 22px;
  font-weight: bold;
  color: var(--lightest-slate);
}
.empty-sub {
  font-size: 17px;
  color: var(--slate);
}

.photo-placeholder {
  break-inside: avoid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px dashed var(--lightest-navy);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--light-navy), var(--navy));
  color: var(--lightest-navy);
  font-size: 28px;
}

@media (prefers-reduced-motion: reduce) {
  .photo-button img,
  .photo-overlay,
  .photo-enter-active,
  .photo-leave-active {
    transition: none;
  }
}

@media screen and (max-width: 1080px) {
  .photo-grid {
    column-count: 2;
  }
  .services {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 600px) {
  #photography {
    padding: 24px 0 0;
  }
  .photo-intro {
    font-size: 20px;
  }
  .photo-swe-note {
    font-size: 17px;
  }
  .booking-button {
    font-size: 18px;
  }
  .photo-grid {
    column-count: 1;
  }
  .photo-grid:has(.photo-placeholder) {
    column-count: 2;
    column-gap: 12px;
  }
  .photo-placeholder {
    margin-bottom: 12px;
  }
  /* No hover on touch screens, so always show the caption */
  .photo-overlay {
    opacity: 1;
    transform: none;
  }
}
</style>

<style>
/* GLightbox caption, themed to match the site (not scoped: the lightbox renders outside this component) */
.glightbox-clean .gslide-description {
  background: var(--light-navy);
}
.glightbox-clean .gdesc-inner {
  padding: 14px 20px;
}
.glightbox-clean .gslide-title {
  font-family: "NTR", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: var(--lightest-slate);
  margin-bottom: 4px;
}
.glightbox-clean .gslide-desc {
  font-family: "NTR", sans-serif;
  color: var(--slate);
}
.glightbox-clean .gslide-desc p {
  margin: 0;
}
.glightbox-clean .gslide-desc .photo-caption-place {
  color: var(--green-bright);
}
.goverlay {
  background: rgba(2, 12, 27, 0.95);
}
</style>
