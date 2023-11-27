<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Register</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.email" class="w-full p-2 mb-4 border rounded-lg" type="email" placeholder="Email" />
      <input v-model="form.username" class="w-full p-2 mb-4 border rounded-lg" type="text" placeholder="Username" />
      <input v-model="form.password" class="w-full p-2 mb-4 border rounded-lg" type="password" placeholder="Password" />
      <button type="submit"
        class="w-full p-2 transition-all duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 text-blue-50">
        Register
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from '#imports';

interface FormData {
  email: string;
  username: string;
  password: string;
}

const form = ref<FormData>({
  email: '',
  username: '',
  password: '',
});

const handleSubmit = () => {
  console.log(form.value);
};
</script>

<style></style>
