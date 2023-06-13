<template>
  <section class="stats">
    <div class="stats__content" v-for="stat in statistics" :key="stat.rate">
      <div class="stats__info">
        <h5 class="stats__title">{{ stat.title }}</h5>
        <span class="stats__value"
          >{{ stat.punc }}{{ stat.value.toLocaleString() }}</span
        >
        <span
          :class="[
            {
              'stats__rate--increased': stat.increased,
              'stats__rate--decreased': !stat.increased,
            },
            'stats__rate',
          ]"
          >{{ stat.increased ? "+" : "-" }}{{ stat.rate }}%</span
        >
      </div>
      <div class="stats__icon">
        <img :src="stat.img" :alt="stat.title" class="stats__icon__item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { statistics } = useInfo();
</script>

<style lang="scss" scoped>
@import '/assets/styles/_app-stats.scss'; 
</style>