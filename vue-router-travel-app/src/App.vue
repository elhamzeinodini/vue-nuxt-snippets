<template>
  <the-navigation></the-navigation>
  <router-view :key="$route.path"></router-view>
  <!-- when navigating between routes, a component instance is destroyed and another one is created -->
</template>


<script setup>
import TheNavigation from '@/components/TheNavigation';
</script>
