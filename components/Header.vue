<template>
  <header class="main-header" data-header-layout="">
    <div class="main-header__inner">
      <!-- <div class="main-header__main-content">
        <div class="main-header__logo">
          <DemoLogo width="100%" height="100%" />
        </div>
        <div class="main-header__main-content-end">
          search
        </div>
      </div> -->
      <nav class="navigation main-header__main-nav">
        <div class="navigation__brand">
          <DemoLogo width="100%" height="100%" />
        </div>
        <div class="navigation__menu">
          <button class="btn" type="button" aria-expanded="false" aria-controls="#menu"></button>
          <ul id="menu" role="list" class="w-full flex">
            <li><a href="#">Nav item 1</a></li>
            <li><a href="#">Nav item 2</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style>

</style>