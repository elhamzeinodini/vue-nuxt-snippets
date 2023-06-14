<template>
  <aside class="side">
    <div class="side__logo divide-current">
      <img src="/icons/logo.svg" alt="ice cream" class="side__logo__item" />
      <span class="side__logo__text">Nuxt3 Soft UI</span>
    </div>
    <nuxt-link
      :class="[
        { 'side__list--active': list.path === $route.fullPath },
        'side__list',
      ]"
      role="list"
      v-for="list in sideList"
      :key="list.icon"
      :to="list.path"
    >
      <div class="side__list__icon">
        <img
          class="side__list__icon__item"
          :alt="list.name"
          :src="`/icons/${list.icon}.svg`"
        />
      </div>
      <div class="side__list__link">{{ list.name }}</div>
    </nuxt-link>
    <h5 class="side__pages">Pages</h5>
    <nuxt-link
      :to="page.path"
      :class="[
        { 'side__list--active': page.path === $route.fullPath },
        'side__list',
      ]"
      v-for="page in pagesList"
      :key="page.icon"
    >
      <div class="side__list__icon">
        <img
          :src="`/icons/${page.icon}.svg`"
          :alt="page.name"
          class="side__list__icon__item"
        />
      </div>
      <div class="side__list__link">{{ page.name }}</div>
    </nuxt-link>
    <app-docs></app-docs>
    <button class="side__btn">UPGRADE TO PRO</button>
  </aside>
</template>

<script setup lang="ts">
interface List {
  name: string;
  icon: string;
  path: string;
}
const sideList = ref<List[]>([
  { name: "Dashboard", icon: "dashboard", path: "/" },
  { name: "Billing", icon: "money-black", path: "/billing" },
  {
    name: "Virtual Reality",
    icon: "virtual-reality",
    path: "/virtual-reality",
  },
]);

const pagesList = ref<List[]>([
  { name: "Profile", icon: "profile", path: "/profile" },
  { name: "Sign In", icon: "sign-in", path: "/sign-in" },
  { name: "Sign Up", icon: "sign-up", path: "/sign-up" },
]);
</script>

<style lang="scss" scoped>
@import "/assets/styles/app-side-nav.scss";
</style>
