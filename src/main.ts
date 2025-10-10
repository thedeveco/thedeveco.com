import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Font Awesome Configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faPencilRuler,
  faGears,
  faChartLine,
  faCode,
  faUsers,
  faBullhorn,
  faRocket,
  faHandshake,
  faLightbulb,
  faArrowRight,
  faCheck,
  faBars,
  faTimes,
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGraduationCap,
  faCalendarDays,
  faBriefcase,
  faNetworkWired,
  faLayerGroup,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faMagnifyingGlass,
  faPencilRuler,
  faGears,
  faChartLine,
  faCode,
  faUsers,
  faBullhorn,
  faRocket,
  faHandshake,
  faLightbulb,
  faArrowRight,
  faCheck,
  faBars,
  faTimes,
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGraduationCap,
  faCalendarDays,
  faBriefcase,
  faNetworkWired,
  faLayerGroup,
  faCodeBranch,
  faDiscord,
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter
)

const app = createApp(App)

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
