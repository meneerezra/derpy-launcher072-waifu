import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {faUser, faHome, faDownload, faEarthEurope, faGear} from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faHome, faGear, faDownload, faEarthEurope);


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')