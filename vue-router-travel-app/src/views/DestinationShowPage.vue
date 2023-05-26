<template>
  <section class="container dest">
    <the-back-button></the-back-button>
    <h2 class="dest__name">{{ findDestination.name }}</h2>
    <div class="dest__content">
      <div class="dest__img">
        <img
          :src="`/images/${findDestination.image}`"
          :alt="findDestination.slug"
          class="dest__img__item"
        />
      </div>
      <div class="dest__subtitle">
        <p class="dest__subtitle__item">{{ findDestination.description }}</p>
      </div>
    </div>
  </section>
  <section class="container experience">
    <h2 class="experience__title">
      top experiences in {{ findDestination.name }}
    </h2>
    <div class="experience__content">
      <router-link
        v-for="experience in findDestination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <the-cards :experience="experience"></the-cards>
      </router-link>
    </div>
    <router-view />
  </section>
</template>

<!-- <script>
import TheBackButton from "/src/components/TheBackButton.vue";
import TheCards from '/src/components/TheCards';
import axios from "axios";
export default {
  data() {
    return {
      destination: null,
    };
  },
  props: {
    id: { type: Number, required: true },
  },
  methods: {
    async getData() {
      const { data } = await axios.get(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`
      );
      this.destination = data;
    },
  },
  async created() {
    this.getData();
  },
  components: { TheBackButton, TheCards },
};
</script> -->

<script setup>
import TheBackButton from "/src/components/TheBackButton.vue";
import TheCards from "/src/components/TheCards";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const destinations = store.state.destinations;

const props = defineProps({
  id: { type: Number, required: true },
});

const findDestination = computed(() => {
  return destinations.find((destination) => {
    return destination.id === props.id;
  });
});
</script>

<style scoped>
.dest {
  margin-top: 7rem;
}

.dest__name{
  margin-block: 1.5rem;
}

.dest__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dest__subtitle{
  max-width: 85ch;
}

.experience {
  margin-top: 4rem;
}

.experience__title {
  margin-bottom: 2rem;
}

.experience__content{
  display: grid;
  grid-template-columns: repeat(4, 265px);
}
</style>
