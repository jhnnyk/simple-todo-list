<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth() // only exists on client side
const router = useRouter()

const email = defineModel('email')
const password = defineModel('password')

function handleSubmit(e) {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/')
    })
    .catch((err) => {
      console.error(err)
    })
}
</script>

<template>
  <main class="login">
    <h2>Sign in</h2>

    <form @submit="handleSubmit">
      <label>
        Email address:
        <input v-model="email" type="email" required />
      </label>

      <label for="password">
        Password:
        <input v-model="password" type="password" autocomplete="current-password" required />
        <a class="help" href="#">Forgot password?</a>
      </label>

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
