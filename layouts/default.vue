<template>
  <AdminHeader />
  <Header />
  <aside class="main-aside bg-primary">
    <slot name="aside"></slot>
  </aside>    
  <main class="main-area">
    <slot />
  </main>
</template>

<script lang="ts" setup>

</script>

<style>

</style>