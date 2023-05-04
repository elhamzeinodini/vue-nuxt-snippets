<script lang="ts" setup>
import {ref} from "vue";

const routes = ref<string[]>(["About us", "Services", "Use Cases", "Pricing", "Blog"])
const showSlider = ref<boolean>(false)
const toggleMenu = () => {
    showSlider.value = !showSlider.value
}

const closeMenu = () => {
    showSlider.value = false
}
</script>

<template>
    <nav class="nav">
        <div class="nav__logo">
            <img alt="logo" class="nav__logo__item nav__logo__item--desktop" src="/images/logo-desktop.svg"/>
            <img alt="logo" class="nav__logo__item nav__logo__item--mobile" src="/images/logo-mobile.svg"/>
        </div>
        <div class="nav__bars">
            <img alt="hamburger menu" src="/images/bars.svg" @click="toggleMenu()"/>
        </div>
        <div class="nav__content nav__content--desktop">
            <ul class="nav__links">
                <li v-for="(route,index) in routes" :key="index" class="nav__items">
                    {{ route }}
                </li>
            </ul>
            <button class="nav__btn">Request a quote</button>
        </div>
        <div v-show="showSlider" class="nav__content nav__content--mobile">
            <img alt="cross" class="nav__close" src="/images/cross.svg" @click="closeMenu()"/>
            <ul class="nav__links">
                <li v-for="(route,index) in routes" :key="index" class="nav__items">
                    {{ route }}
                </li>
            </ul>
            <button class="nav__btn">Request a quote</button>
        </div>
    </nav>
</template>

<style lang="scss">
@import './the-navigation-desktop.scss';
@import './the-navigation-mobile.scss';
</style>