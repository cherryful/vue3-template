import '@unocss/reset/tailwind.css'
import 'unocss-ui/style.css'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
