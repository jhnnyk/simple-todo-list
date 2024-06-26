<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()
</script>

<template>
  <header class="p-10">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink v-if="!user" to="/login">Login</RouterLink>

      <div class="right" v-if="user">
        Hello {{ user.email }}
        <button>sign out</button>
      </div>
    </nav>
  </header>

  <RouterView class="px-10" />
</template>

<style scoped></style>
