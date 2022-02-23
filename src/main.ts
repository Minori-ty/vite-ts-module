import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store'
import router from './router'
import './hooks/useRequest'
import filter from './utils/filters'
import { createPinia } from 'pinia'
import './assets/css/global.css'

createApp(App)
    .use(store, key)
    .use(router)
    .use(createPinia())
    .use(filter)
    .mount('#app')
