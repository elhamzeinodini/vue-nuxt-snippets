<script lang="ts" setup>
import TheHeadings from "../Headings/TheHeadings.vue";
import {ref} from "vue";

interface FAQ {
    [index: number]: {
        order: string,
        title: string,
        subtitle: string
    }
}

const faqData = ref<FAQ>([
    {
        order: "01",
        id: 1,
        visible: false,
        title: "Consultaion",
        subtitle: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        order: "02",
        id: 2,
        visible: false,
        title: "Research and Strategy Development",
        subtitle: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        order: "03",
        id: 3,
        visible: false,
        title: "Implementation",
        subtitle: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        order: "04",
        id: 4,
        visible: false,
        title: "Monitoring and Optimization",
        subtitle: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        order: "05",
        id: 5,
        visible: false,
        title: "Reporting and Communication",
        subtitle: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        order: "06",
        id: 6,
        visible: false,
        title: "Continual Improvement",
        subtitle: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
])
const showAnswer = (id: string) => {
    const clickedFaq = faqData.value.find((faq: Object): boolean => {
        return faq.id === id
    })
    clickedFaq.visible = !clickedFaq.visible
}

</script>

<template>
    <the-headings subtitle="Step-by-Step Guide to Achieving Your Business Goals"
                  title="Our Working Process"></the-headings>
    <section class="faq lg:my-[4rem] sm:mx-[1.5rem] sm:my-[1.5rem]">
        <div v-for="faq in faqData" :key="faq.id" :class="{'faq__content--show' : faq.visible}"
             class="faq__content rounded-[2.5rem] border-2 border-black border-b-[7px]">
            <div class="faq__header">
                <div class="faq__header__title">
                    <span class="faq__header__title__num">{{ faq.order }}</span>
                    <span class="faq__header__title__text">{{ faq.title }}</span>
                </div>
                <div class="faq__icon">
                    <span v-show="!faq.visible" class="faq__icon__item"
                          @click="showAnswer(faq.id)">+</span>
                    <span v-show="faq.visible" class="faq__icon__item"
                          @click="showAnswer(faq.id)">-</span>
                </div>
            </div>
            <div v-show="faq.visible" class="faq__description">
                <p class="faq__description__item">{{ faq.subtitle }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './the-faq-desktop.scss';
@import './the-faq-mobile.scss';
</style>