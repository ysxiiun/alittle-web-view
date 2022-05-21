import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import routes from './router/routes.js'
import ElementPlus from 'element-plus'
import title from "@/components/TitleMenu";

import 'element-plus/dist/index.css'
import '@/style/main.css'

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes,
})

const app = createApp(App)
app.component("title-menu", title)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

