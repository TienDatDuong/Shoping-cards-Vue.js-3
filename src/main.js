import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/style/main.scss'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
