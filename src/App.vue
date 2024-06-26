<script setup>
import { signOut } from 'firebase/auth'
import { RouterLink, RouterView } from 'vue-router'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const user = useCurrentUser()
const auth = useFirebaseAuth()

function logout() {
  signOut(auth)
    .then(() => {})
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <header class="p-10">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>

      <div class="right">
        <span v-if="user">
          Hello {{ user.email }}
          <button @click="logout">sign out</button>
        </span>
        <span v-else><RouterLink class="button" v-if="!user" to="/login">Sign In</RouterLink></span>
      </div>
    </nav>
  </header>

  <RouterView class="px-10" />
</template>

<style scoped></style>
