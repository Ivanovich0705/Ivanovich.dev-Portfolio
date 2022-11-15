import { createApp, render } from 'vue'
import App from './App.vue'
import router from './router'
import primevue from 'primevue/config'

import Steps from 'primevue/steps';
import Card from 'primevue/card';
import Navbar from './components/navbar.vue'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import sectionTitle from './components/sectionTitle.vue'
import 'primevue/resources/primevue.min.css';
import './assets/_theme.css'
import 'primeicons/primeicons.css';
import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.use(primevue, { ripple: true })
app.component('Steps', Steps)
app.component('Card', Card)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Navbar', Navbar)
app.component('sectionTitle', sectionTitle)
app.mount('#app')
