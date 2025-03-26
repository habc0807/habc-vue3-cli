import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'

import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages' // 路由配置 自动导入
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)

const VuePlugins = import.meta.glob('./modules/*.ts', { eager: true })
Object.values(VuePlugins)
    .forEach((i: any) => i.install?.({app}))  

app.mount('#app')

