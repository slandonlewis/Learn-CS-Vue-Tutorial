import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router) // Telling Vue to use our routing rules defined in router/index.js
app.mount('#app')
