<script setup>
import { db } from '@/firebase/config'
import { addDoc, collection, orderBy, query, Timestamp } from 'firebase/firestore'
import { useCurrentUser, useCollection } from 'vuefire'

const user = useCurrentUser()
const todos = useCollection(query(collection(db, 'todos'), orderBy('createdAt', 'desc')), {
  ssrKey: 'my-todos'
})
const newTodo = defineModel('newTodo')

const addNewTodo = async (e) => {
  e.preventDefault()
  console.log(newTodo.value)

  try {
    const createdAt = Timestamp.fromDate(new Date())
    const docRef = await addDoc(collection(db, 'todos'), {
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

      <ul v-if="todos">
        <li v-for="todo in todos" :key="todo.task">
          {{ todo.task }} - {{ todo.createdAt.toDate() }}
        </li>
      </ul>
    </div>
  </main>
</template>
