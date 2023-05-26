<template>
    <section class="container cards">
        <div class="cards__img">
            <img :src="`/images/${experience.image}`" :alt="experience.slug" class="cards__img__item">
        </div>
        <div class="cards__subtitle">
            <p class="cards__subtitle__item">{{ experience.name }}</p>
        </div>
    </section>
</template>


<script setup>
const props = defineProps({
    experience: {type:Object, required: true},
})
</script>

<style>
</style>