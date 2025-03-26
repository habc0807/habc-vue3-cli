import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'

const app = createApp(App)

const VuePlugins = import.meta.glob('./modules/*.ts', { eager: true })
Object.values(VuePlugins)
    .forEach((i: any) => i.install?.({app}))  

app.mount('#app')

