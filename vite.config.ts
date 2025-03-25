import { defineConfig } from "vite";
import path from "path";
import VuePlugin from '@vitejs/plugin-vue'


export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`
        }
    },
    plugins: [
        VuePlugin({
            include: [/\.vue$/]
        })
    ]
})