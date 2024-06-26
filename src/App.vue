<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-10">
    <nav>
      <RouterLink class="px-4 text-sky-600 hover:text-sky-700" to="/">Home</RouterLink>
      <RouterLink class="px-4 text-sky-600 hover:text-sky-700" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView class="px-10" />
</template>

<style scoped>
nav .router-link-active {
  text-decoration: underline;
}
</style>
