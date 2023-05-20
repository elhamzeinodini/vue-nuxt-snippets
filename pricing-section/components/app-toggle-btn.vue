<template>
  <section class="toggle">
    <div class="toggle__info">
      <span class="toggle__text">Pay Monthly</span>
      <div :class="[{ 'toggle__item--rotate': toggle }, 'toggle__item']">
        <div
          :class="[
            { 'toggle__item__circle--rotate': toggle },
            'toggle__item__circle',
          ]"
          @click="handleToggleBtn"
        ></div>
      </div>
      <span class="toggle__text">Pay Yearly</span>
    </div>
    <div class="toggle__svg">
      <img src="/images/arrow.svg" alt="arrow" class="toggle__svg__item" />
      <span class="toggle__svg__text">Save 25%</span>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/Style/app-toggle-btn-desktop.scss";
</style>

<script setup lang="ts">
import { useToggleStore } from "~/stores/toggle";
import { storeToRefs } from "pinia";

const store = useToggleStore();

let { toggle } = storeToRefs(store);

const handleToggleBtn = () => {
  store.toggle = !store.toggle;
};
</script>
