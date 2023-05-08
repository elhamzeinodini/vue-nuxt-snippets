<template>
    <section class="headings lg:mx-[6.5rem] lg:my-[2.5rem]">
            <span class="headings__title">{{ title }}</span>
            <p class="headings__description">{{ subtitle }}</p>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    title: string,
    subtitle: string
}

const props = defineProps<Props>()

</script>

<style lang="scss">
@import './the-headings-desktop.scss';
@import './the-headings-mobile.scss';
</style>