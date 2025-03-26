import { defineConfig } from "vite";
import path from "path";
import VuePlugin from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {  presetAttributify, presetIcons } from 'Unocss'
import Pages from "vite-plugin-pages"


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
        })
    ]
})