import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: () => import('~/pages/index.vue'),
        },
        {
            path: '/login', component: () => import('~/pages/login.vue')
        }
    ]
})

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

