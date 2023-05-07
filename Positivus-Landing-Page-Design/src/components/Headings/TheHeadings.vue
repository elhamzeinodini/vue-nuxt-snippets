<template>
    <section class="headings">
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