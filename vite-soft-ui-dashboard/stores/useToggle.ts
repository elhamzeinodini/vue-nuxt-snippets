import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", () => {
  const toggleMenu = ref<boolean>(false);
  const handleSideNav = () => (toggleMenu.value = !toggleMenu.value);
  return { toggleMenu, handleSideNav };
});
