<template>
  <nav class="nav">
    <div class="nav__left">
      <div class="nav__left__bell">
        <img src="/icons/bell.svg" alt="bell" class="nav__left__bell__icon" />
      </div>
      <div class="nav__left__setting">
        <img
          src="/icons/setting.svg"
          alt="setting"
          class="nav__left__setting__icon"
        />
      </div>
      <div class="nav__left__bars">
        <img
          src="/icons/expand.svg"
          alt="expand"
          class="nav__left__bars__expand"
          v-show="!toggleMenu"
        />
        <img
          src="/icons/fold.svg"
          alt="fold"
          class="nav__left__bars__fold"
          v-show="toggleMenu"
        />
      </div>
      <nuxt-link to="/sign-in" class="nav__left__link"
        ><img src="/icons/profile.svg" alt="profile" class="nav__left__icon"
      /></nuxt-link>
    </div>
    <div class="nav__right">
      <input
        type="text"
        v-model="searchQuery"
        class="nav__right__input"
        placeholder="Type here..."
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
const searchQuery = ref<string>("");
const toggleMenu = ref<boolean>(false);
</script>

<style lang="scss" scoped>
@import "/assets/styles/_app-navigation-mobile.scss";
</style>
