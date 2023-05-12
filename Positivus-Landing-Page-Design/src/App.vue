<script setup lang="ts">
import TheNavigation from "./components/Navigation/TheNavigation.vue";
import TheLanding from "./components/Landing/TheLanding.vue";
import TheServices from "./components/Services/TheServices.vue";
import AppCard from "./components/Card/AppCard.vue";
import TheCaseStudies from "./components/Case Studies/TheCaseStudies.vue";
import TheFaq from "./components/Faq/TheFaq.vue";
import TheTeam from "./components/Teams/TheTeam.vue";
import TheTestimonials from "./components/Testimonials/TheTestimonials.vue";
</script>

<template>
  <the-navigation></the-navigation>
  <the-landing></the-landing>
  <the-services></the-services>
  <app-card></app-card>
  <the-case-studies></the-case-studies>
  <the-faq></the-faq>
  <the-team></the-team>
  <the-testimonials></the-testimonials>
</template>
