<template>
  <section class="btn">
    <span class="btn__text" :style="handleTextColor">Read More</span>
    <img
      :src="`/icons/${iconType}.svg`"
      alt="arrow right"
      class="btn__icon hover:translate-x-[5px]"
    />
  </section>
</template>

<style lang="scss" scoped>
@import "/assets/styles/app-read-more-btn.scss";
</style>

<script setup lang="ts">
const props = defineProps<{
  textColor: string;
  iconType: string;
}>();

const handleTextColor = computed(() => {
  return { color: props.textColor };
});
</script>
