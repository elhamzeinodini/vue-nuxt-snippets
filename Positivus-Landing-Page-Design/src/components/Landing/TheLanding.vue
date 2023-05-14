<script lang="ts" setup>
import {reactive} from "vue";

const corpImgs = reactive({
    amazon: "/images/amazon.svg",
    dribble: "/images/dribble.svg",
    hubspot: "/images/hubspot.svg",
    netflix: "/images/netflix.svg",
    notion: "/images/notion.svg",
    zoom: "/images/zoom.svg"
})
</script>

<template>
    <section class="landing lg:my-[2.5rem]">
        <div class="landing__data">
            <div class="landing__content">
                <h1 class="landing__title">Navigating the digital landscape for success</h1>
                <p class="landing__description">Our digital marketing agency helps businesses grow and succeed online
                    through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button class="landing__btn">Book a consultation</button>
            </div>
            <div class="landing__svg">
                <img alt="illustration" class="landing__svg__item" src="/images/illustration.svg">
            </div>
        </div>
        <div class="landing__corp">
            <img v-for="corpImg in corpImgs" :src="corpImg"
                 alt="company logos"
                 class="landing__corp__item"
            />
        </div>
    </section>
</template>

<style lang="scss">
@import './the-landing-desktop.scss';
@import './the-landing-mobile.scss';
@import './the-landing-tablet.scss';
</style>
