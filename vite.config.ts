import { defineConfig } from "vite";
import path from "path";
import VuePlugin from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {  presetAttributify, presetIcons } from 'Unocss'
import Pages from "vite-plugin-pages"
import AutoImport from 'unplugin-auto-import/vite' // 函数/API 自动导入Tree-shaking
import Components from 'unplugin-vue-components/vite' // 组件自动导入 
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Layouts from 'vite-plugin-vue-layouts'


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
            extensions: ["vue", "md"],
            exclude: ['**/components/*.vue'], // 排除页面中的子组件
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'pinia',
                'vue-i18n',
                '@vueuse/head',
                '@vueuse/core',
            ],
            // dts: true,
            dts: 'src/auto-imports.d.ts',
        }),
        Components({
            // 增加 src/**/components 支持页面中的子组件自动加载
            dirs: ['src/components', 'src/**/components'],
            // allow auto load markdown components under `./src/components/`
            extensions: ["vue", "md"],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: "src/components.d.ts",
        }),
        Layouts()
    ]
})