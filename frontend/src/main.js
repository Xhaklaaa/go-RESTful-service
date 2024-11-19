import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router.js'


window.global = window.global || {};
window.global.api_location = 'http://localhost:9090'; // Укажите ваш URL сервера

const app = createApp(App)
app.use(router)
app.mount('#app')
