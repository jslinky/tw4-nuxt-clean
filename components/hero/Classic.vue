<template>
    <div class="col-start-2 col-end-2 hero-content__container flex-layout-grid justify-center">
      <div class="hero-content__text @container flex-col flow justify-center place-content-center">
        <h2 class="heading-xl">We build your digital future</h2>
        <p class="text-md">Help us help you take the next step in a journey which will lead you to the final step</p>
        <div class="flex">
          <a href="#" class="btn btn-primary self-start">Find out more</a>
        </div>
      </div>
      <div class="hero-content__image">
          <img src="https://picsum.photos/1200/500" />
        </div>            
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
/* Move this temp - tailwind not picking up classes */
  .hero-content__container {
    grid-column-start:2;
    grid-column-end:4;
  }
</style>