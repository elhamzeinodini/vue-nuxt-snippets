<template>
    <section class="plans" v-show="toggle">
      <div class="plans__data" v-for="plan in plans" :key="plan.title">
        <h3 class="plans__title">{{ plan.title }}</h3>
        <p class="plans__subtitle">{{ plan.subtitle }}</p>
        <p class="plans__price">
          <span class="plans__price__num">{{ plan.price.yearly }}</span>
          <span class="plans__price__text"> / Year</span>
        </p>
        <button>Get Started Now</button>
        <div
          class="plans__options"
          v-for="(option, index) in plan.options"
          :key="index"
        >
          <img
            src="/images/cross-icon.svg"
            alt="cross icon"
            v-show="!option.included"
            class="plans__options__icon"
          />
          <img
            src="/images/shape.svg"
            alt="cross icon"
            v-show="option.included"
            class="plans__options__icon"
          />
          <span
            :class="[
              { 'plans__options__title--inactive': !option.included },
              'plans__options__title',
            ]"
            >{{ option.title }}</span
          >
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useToggleStore } from "~/stores/toggle";
  import { storeToRefs } from "pinia";
  
  const { plans } = useData();
  const store = useToggleStore();
  const { toggle } = storeToRefs(store);
  </script>
  
  <style lang="scss">
  @import "~/assets/scss/Style/app-plans-desktop.scss";
  </style>
  