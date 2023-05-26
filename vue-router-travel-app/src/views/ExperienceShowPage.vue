<template>
  <section class="container card">
    <h2 class="card__title">{{ getExperiences.name }}</h2>
    <div class="card__content">
      <div class="card__img">
        <img
          :src="`/images/${getExperiences.image}`"
          :alt="getExperiences.slug"
          class="card__img__item"
        />
      </div>
      <div class="card__subtitle">
        <p class="card__subtitle__item">{{ getExperiences.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  experienceSlug: { type: String, required: true },
  id: { type: Number, required: true },
});

const destinations = store.state.destinations;

const getDestinations = computed(() => {
  return destinations.find((destination) => {
    return destination.id === props.id;
  });
});

const getExperiences = computed(() => {
  return getDestinations.value.experiences.find((experience) => {
    return experience.slug === props.experienceSlug;
  });
});
</script>

<style scoped>
.container {
  margin-top: 5rem;
}

.card__title{
    margin-block: 1.5rem;
}

.card__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card__subtitle{
    max-width: 85ch;
}

.card__subtitle__item{
    font-size: .75rem;
}
</style>
