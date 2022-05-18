import { createApp } from 'vue'
import App from './App.vue'
import Ele from 'element-plus';

import 'element-plus/dist/index.css'

createApp(App).mount('#app')
createApp(App).use(Ele)
