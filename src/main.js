import { createApp, render } from 'vue'
import App from './App.vue'
import router from './router'
import primevue from 'primevue/config'
import { Swiper, SwiperSlide } from 'swiper/vue';
import Steps from 'primevue/steps';
import Card from 'primevue/card';
import Navbar from './components/navbar.vue'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import sectionTitle from './components/sectionTitle.vue'
import proyects from './components/proyects.vue'


//import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'aos/dist/aos.css'
import './assets/_theme.css'
import 'swiper/css';

const app = createApp(App)

app.use(router)
app.use(primevue, { ripple: true })
app.use
app.component('Steps', Steps)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.component('Card', Card)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('proyects', proyects)
app.component('Navbar', Navbar)
app.component('sectionTitle', sectionTitle)
app.mount('#app')
