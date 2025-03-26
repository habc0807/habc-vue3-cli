import { createRouter, createWebHistory } from 'vue-router'
import type { VueModule } from './types' // import type怎么理解
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

// import routes from '~pages' // 路由配置 自动导入
const routes = setupLayouts(generatedRoutes)

export const install: VueModule = ({ app }) => {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })
    app.use(router)
}