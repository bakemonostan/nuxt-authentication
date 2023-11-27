<script lang="ts" setup>
import { definePageMeta } from '#imports'
definePageMeta({
  middleware: ['guest'],
})
const form = ref({
  username: '',
  password: '',
})

const { signIn } = useAuth();

async function handleSubmit() {
  try {
    const res = await signIn('credentials', form.value)
    useRouter().push({
      name: 'index',
    })
  } catch (error) {
    console.log(error)
  }
}

</script>
<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Login</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.username" class="w-full p-2 mb-4 border rounded-lg" type="text" placeholder="Username" />
      <input v-model="form.password" class="w-full p-2 mb-4 border rounded-lg" type="password" placeholder="Password" />
      <button type="submit"
        class="w-full p-2 transition-all duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 text-blue-50">
        Login
      </button>
    </form>
  </div>
</template>

<style></style>
