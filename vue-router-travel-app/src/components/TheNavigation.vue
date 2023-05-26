<template>
  <nav class="nav">
    <router-link class="nav__link" to="/">Travel App</router-link>
    <router-link
      class="nav__link"
      v-for="destination in destinations"
      :key="destination.slug"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
      >{{ destination.name }}</router-link
    >
  </nav>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const destinations = store.state.destinations;
</script>

<style scopped>
.nav {
  width: 100%;
  height: 5rem;
  position: fixed;
  inset: 0 auto auto 0;
  background-color: cadetblue;
  display: flex;
  align-items: center;
  padding-inline: 3rem;
}

.nav__link {
  text-decoration: none;
  color: #fff;
  padding-right: 2rem;
}

.router-link-active,
.router-link-exact-active {
  color: #333;
}
</style>
