import { defineStore } from 'pinia'

export const useToggleStore = defineStore("toggler", () => {
    const toggle = ref(false)

    return {toggle}
})