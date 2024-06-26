<script setup>
import { todosRef } from '@/firebase/config'
import { addDoc } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore'
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()

const newTodo = defineModel('newTodo')

const addNewTodo = async (e) => {
  e.preventDefault()
  console.log(newTodo.value)

  try {
    const createdAt = Timestamp.fromDate(new Date())
    const docRef = await addDoc(todosRef, {
      createdAt: createdAt,
      owner: user.value.uid,
      task: newTodo.value
    })
    console.log(docRef)
  } catch (err) {
    console.log(err)
  }

  newTodo.value = ''
}
</script>

<template>
  <main class="home">
    <h1>ToDos</h1>
    <div v-if="!user">
      <p>Please Sign In or Create an Account</p>
    </div>

    <div v-else>
      <p>{{ user ? user : '' }}</p>

      <form @submit="addNewTodo">
        <label>
          <input v-model="newTodo" type="text" placeholder="add new todo" />
        </label>
        <button>+</button>
      </form>
    </div>
  </main>
</template>
