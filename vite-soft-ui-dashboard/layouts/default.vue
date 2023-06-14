<template>
  <div>
    <app-navigation-mobile></app-navigation-mobile>
    <app-side-nav v-show="toggleMenu"></app-side-nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useToggleStore } from "~/stores/useToggle";

const store = useToggleStore();
const { toggleMenu } = storeToRefs(store);
</script>
