<script lang="ts" setup>
import TheHeadings from "../Headings/TheHeadings.vue";
import {ref} from "vue";

interface Services {
    [key: number]: { img: string, title: string, id: string, color: string }
}

const servicesImgs = ref<Services>([
    {img: "/images/seo.svg", title: "Search engine optimization", id: "one", color: "#B9FF66"},
    {img: "/images/advertise.svg", title: "Pay-per-click advertising", id: "two", color: "#fff"},
    {img: "/images/social-media.svg", title: "Social Media Marketing", id: "three", color: "#fff"},
    {img: "/images/email-marketing.svg", title: "Email Marketing", id: "four", color: "#B9FF66"},
    {img: "/images/content.svg", title: "Content Creation", id: "five", color: "#fff"},
    {img: "/images/ad-tracking.svg", title: "Analytics and Tracking", id: "six", color: "#B9FF66"},
])
</script>

<template>
    <the-headings
            subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            title="Services"></the-headings>
    <section class="services lg:mx-[6.5rem] lg:my-[4rem]">
        <div class="services__list lg:grid lg:grid-cols-2 lg:gap-5">
            <div v-for="item in servicesImgs" :key="item.id" :class="'services__box services__box--' + item.id">
                <div class="services__box__content">
                    <div class="services__box__content__title">
                        <span :style="{backgroundColor: item.color}">{{ item.title }}</span>
                    </div>
                    <div class="services__box__content__link">
                        <img alt="arrow icon" class="services__box__content__link__img" src="/images/arrow-icon.svg"/>
                        <span class="services__box__content__link__text">Learn More</span>
                    </div>
                </div>
                <div class="services__box__img">
                    <img :src="item.img"
                         alt="services"
                         class="services__box__img__item"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './the-services-desktop.scss';
@import './the-services-mobile.scss';
</style>