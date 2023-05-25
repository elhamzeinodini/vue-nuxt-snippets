<template>
  <section class="config">
    <h2 class="config__title">Product Configuration</h2>
    <div class="config__link">
      <img src="/images/alert.svg" alt="alert" class="config__link__icon" />
      <NuxtLink class="config__link__item"
        >Learn more about our Ordering Process
      </NuxtLink>
    </div>
    <div class="config__variants">
      <div class="config__variants__left">
        <h3 class="config__variants__title">Choose a Color</h3>
        <div class="config__variants__color">
            <div
            v-for="i in 4"
            :key="i"
            :class="`config__variants__color__item config__variants__color__item--${i}`"
          ></div>
        </div>
      </div>
      <div class="config__variants__right">
        <span class="config__variants__up">Unit Price</span>
        <span class="config__variants__down">From 1.81 $</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/styles/app-product-config-desktop.scss";
</style>
