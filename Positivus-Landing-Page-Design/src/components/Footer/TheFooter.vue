<script lang="ts" setup>
import {Ref, ref} from "vue";

const links: Ref<String[]> = ref(["About us", "Services", "Use Cases", "Pricing", "Blog"])
const icons: Ref<string[]> = ref(["/images/linkedin-icon.svg", "/images/faceBook-icon.svg", "/images/twitter-icon.svg"])
const userMail = ref<String>("")
</script>

<template>
    <footer class="footer lg:mt-[4rem] sm:mx-[1.5rem] sm:mt-[1.5rem]">
        <div class="footer__nav">
            <div class="footer__nav__logo">
                <img alt="logo" class="footer__nav__logo__item" src="/images/logo-white.svg"/>
            </div>
            <ul class="footer__nav__links">
                <li v-for="(link, index) in links" :key="index" class="footer__nav__links__items">
                    {{ link }}
                </li>
            </ul>
            <div class="footer__nav__icons">
                <img v-for="(icon, index) in icons" :key="index" :src="icon" alt="social media icon"
                     class="footer__nav__icons__item"/>
            </div>
        </div>
        <div class="footer__reg">
            <div class="footer__reg__info">
                <span class="footer__reg__info__title">contact us:</span>
                <span class="footer__reg__info__email">Email: info@positivus.com</span>
                <span class="footer__reg__info__phone">Phone: 555-567-8901</span>
                <p class="footer__reg__info__address">Address: 1234 Main <br/>
                    Moonstone City, Stardust State 12345</p>
            </div>
            <div class="footer__reg__form lg:py-[3rem] lg:px-[3rem] sm:px-[1.5rem] sm:py-[1.5rem]">
                <input v-model="userMail" placeholder="Email" type="email"/>
                <button>Subscribe to news</button>
            </div>
        </div>
        <div class="footer__text">
            <div class="footer__text__item">
                <p>&copy 2023 Positivus. All Rights Reserved.</p>
                <span>Privacy Policy</span>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import './the-footer-desktop.scss';
@import './the-footer-mobile.scss';
@import './the-footer-tablet.scss';
</style>