<template>
  <nav class="nav">
    <div class="nav__logo">
      <img src="/images/logo.png" alt="" class="nav__logo__item" />
    </div>
    <ul class="nav__links">
      <li v-for="(link, index) in links" :key="index" :class='`nav__items nav__items--${index}`'>
        {{ link }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const links = ref<string[]>([
  "Promotional Classics",
  "Apparel & Bags",
  "Leisure & Outdoor",
  "Office",
  "Tech",
  "Christmas Gifts",
  "Inspiration",
  "Brands",
]);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/app-navigation-desktop.scss";
</style>
