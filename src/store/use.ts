import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const count = ref(0)
    function add(num: number = 0) {
        count.value = count.value + num
    }
    return { add, count}
})

// 热更新的时候 还能够保持原来的状态
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}