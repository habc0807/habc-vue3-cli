import { createPinia } from 'pinia'
import type { VueModule } from './types' // import type怎么理解
// Setup Pinia
// https://pinia.esm.dev/
export const install: VueModule = ({ app }) => {
    const pinia = createPinia()
    app.use(pinia)
// Refer to
// https://github.com/antfu/vite-ssg/blob/main/README.md#state-serializat
// for other serialization strategies.
// if (isClient)
// pinia.state.value = (initialState.pinia) || {}
// else
// initialState.pinia = pinia.state.value
}