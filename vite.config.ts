import { defineConfig } from "vite";
import path from "path";
import VuePlugin from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {  presetAttributify, presetIcons } from 'Unocss'
import Pages from "vite-plugin-pages"
import AutoImport from 'unplugin-auto-import/vite' // 函数/API 自动导入Tree-shaking
import Components from 'unplugin-vue-components/vite' // 组件自动导入 
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`
        }
    },
    plugins: [
        VuePlugin({
            include: [/\.vue$/]
        }),
        Unocss({
            presets: [
                presetAttributify(),
                presetIcons()
            ]
        }),
        Pages({
            extensions: ['vue']
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'pinia',
                // 'vue-i18n',
                '@vueuse/head',
                '@vueuse/core',
            ],
            // dts: true,
            dts: 'src/auto-imports.d.ts',
        }),
        Components({
            extensions: ['vue', 'md'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [ElementPlusResolver()],
            // dts: true,
            dts: 'src/components.d.ts',
        }),
    ]
})