<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth() // only exists on client side

const email = defineModel('email')
const password = defineModel('password')

function handleSubmit(e) {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email.value, password.value).catch((err) => {
    console.error(err)
  })
}
</script>

<template>
  <main class="login">
    <h2>Sign in to your account</h2>

    <form @submit="handleSubmit" class="space-y-6">
      <label for="email">Email address</label>
      <input v-model="email" id="email" name="email" type="email" autocomplete="email" required />

      <label for="password"> Password </label>
      <a href="#"> Forgot password? </a>
      <input
        v-model="password"
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        required
      />

      <button type="submit">Sign in</button>
    </form>

    <p>
      Not a member?
      {{ ' ' }}
      <a href="#">Start a 14 day free trial</a>
    </p>
  </main>
</template>

<style></style>
