<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})

const { data, signOut } = useAuth()
async function handleLogout() {
  await signOut()
}
</script>
<template>
  <div>
    <h1 class="mb-4 text-xl font-bold">Welcome {{ (data?.user as any).username }}</h1>
    <p>Access your dashboard and account from here</p>

    <button type="button" @click="handleLogout()"
      class="px-5 py-2 mt-4 transition-all duration-200 bg-red-500 rounded-lg hover:bg-red-600 text-red-50">
      Logout
    </button>
  </div>
</template>

<style></style>
