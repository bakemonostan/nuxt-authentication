<script lang="ts" setup>
import { definePageMeta } from '#imports'
definePageMeta({
  middleware: ['auth'],
})
</script>
<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Welcome {user}</h1>
    <p>Access your dashboard and account from here</p>

    <button type="button"
      class="px-5 py-2 mt-4 transition-all duration-200 bg-red-500 rounded-lg hover:bg-red-600 text-red-50">
      Logout
    </button>
  </div>
</template>

<style></style>
