<template>
    <section class="card lg:my-[4rem]">
        <div class="card__content">
            <h2 class="card__title">{{ text.title }}</h2>
            <p class="card__subtitle">{{ text.subtitle }}</p>
            <button class="card__btn">{{ text.btnText }}</button>
        </div>
        <div class="card__img">
            <img :src="text.img" alt="img" class="card__img__item"/>
        </div>
    </section>
</template>


<script lang="ts" setup>
import {reactive} from "vue";

interface CardText {
    [key: string]: string
}

const text: CardText = reactive({
    title: "Let’s make things happen",
    subtitle: "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
    btnText: "Get your free proposal",
    img: "/images/illustration2.svg"
})
</script>

<style lang="scss" scoped>
@import "./app-card-desktop.scss";
@import './app-card-mobile.scss';
</style>