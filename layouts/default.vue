<template>
  <AdminHeader v-if="uiSettings" />
  <Header />
  <aside class="main-aside bg-primary">
    <slot name="aside"></slot>
  </aside>    
  <main class="main-area">
    <slot />
  </main>
  <div v-if="uiSettings" class="ui-settings-panel col-start-2 col-end-4 row-span-full bg-dark/90 w-56 h-full ml-auto mr-0 z-50">
    <p>Panel</p>
  </div>
  <button @click="uiSettings = !uiSettings" class="btn btn-circle fixed mr-lg bottom-lg z-50 right-0">
    <Icon name="uil:cog" color="black" />
  </button>
</template>

<script lang="ts" setup>

const uiSettings = useState('ui-settings', () => false)


</script>

<style>

</style>