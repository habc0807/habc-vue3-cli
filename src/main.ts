import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'uno.css'
import routes from '~pages' // 路由配置 自动导入
console.log(routes)

const router = createRouter({
    history: createWebHistory(),
    // routes: [
    //     {
    //         path: '/', component: () => import('~/pages/index.vue'),
    //     },
    //     {
    //         path: '/login', component: () => import('~/pages/login.vue')
    //     }
    // ]
    routes
})

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

