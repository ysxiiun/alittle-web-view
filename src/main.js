import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import routes from './router/routes.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes,
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

