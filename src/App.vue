<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth() // only exists on client side
const user = useCurrentUser()
console.log(user)
</script>

<template>
  <header class="p-10">
    <nav>
      <RouterLink class="px-4 text-sky-600 hover:text-sky-700" to="/">Home</RouterLink>
      <RouterLink class="px-4 text-sky-600 hover:text-sky-700" to="/about">About</RouterLink>
      <RouterLink v-if="!user" class="px-4 text-sky-600 hover:text-sky-700" to="/login">
        Login
      </RouterLink>

      <span v-if="user">Hello {{ user }}</span>
    </nav>
  </header>

  <RouterView class="px-10" />
</template>

<style scoped>
nav .router-link-active {
  text-decoration: underline;
}
</style>
