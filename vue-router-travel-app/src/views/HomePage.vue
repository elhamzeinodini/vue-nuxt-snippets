<template>
  <section class="home container">
    <h2 class="home__title">All destinations</h2>
    <div class="home__content">
      <router-link
        class="home__link"
        v-for="destination in destinations"
        :key="destination.slug"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <div class="home__dest">
          <h5 class="home__dest__item">{{ destination.name }}</h5>
        </div>
        <div class="home__img">
          <img
            :src="`/images/${destination.image}`"
            :alt="destination.slug"
            class="home__img__item"
          />
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const destinations = store.state.destinations;
</script>

<style scoped>
.container{
  margin-top: 10rem;
}

.home__title {
  margin-bottom: 2rem;
}

.home__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home__dest__item {
  margin-bottom: 0.5rem;
}

.home__link {
  text-decoration: none;
  color: #333;
}
</style>
