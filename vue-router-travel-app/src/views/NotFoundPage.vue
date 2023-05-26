<template>
  <section class="container">
    <p>
      the page you're looking for doesn't exist , try
      <router-link :to="{ name: 'home.page' }">home</router-link>
    </p>
  </section>
</template>


<style scoped>
.container{
    margin-top: 7rem;
}
</style>