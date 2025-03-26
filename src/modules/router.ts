import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages' // 路由配置 自动导入
import type { VueModule } from './types' // import type怎么理解

export const install: VueModule = ({ app }) => {
    const router = createRouter({
        history: createWebHistory(),
        routes
    })
    app.use(router)
}