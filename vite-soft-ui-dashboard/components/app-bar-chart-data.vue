<template>
  <section class="info">
    <h2 class="info__title">{{ calculateBarInfo.title }}</h2>
    <p class="info__subtitle" v-html="calculateBarInfo.subtitle"></p>
  </section>
</template>

<script setup lang="ts">
const { sales } = useSalesInfo();

const calculateBarInfo = computed(() => {
  const barInfo = {
    title: sales[0]?.title || "",
    subtitle: sales[0]?.subtitle || ""
  }
  return barInfo;
});
</script>
