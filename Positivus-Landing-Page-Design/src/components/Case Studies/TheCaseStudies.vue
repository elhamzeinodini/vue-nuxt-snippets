<script lang="ts" setup>
import TheHeadings from "../Headings/TheHeadings.vue";
import {ref} from "vue";

const casesText = ref<string[]>([
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
])
</script>

<template>
    <the-headings
            subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
            title="Case Studies"></the-headings>
    <section class="cases lg:divide-x sm:overflow-x-scroll lg:my-[4rem]">
        <div v-for="text in casesText" :key="text" class="cases__list">
            <div class="cases__content">
                <p class="cases__description">{{ text }}</p>
                <div class="cases__btn">
                    <span class="cases__btn__text">Learn More</span>
                    <img alt="arrow icon" class="cases__btn__icon" src="/images/arrow-icon.svg">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './the-case-studies-desktop.scss';
@import './the-case-studies-mobile.scss';
</style>