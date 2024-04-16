<script setup lang="ts">
import { reactive } from 'vue';

const styleDef = reactive({
  colors: {
    primary: {
      color: 'bg-primary',
      foreground: 'text-primary-fg',
      range: {
        'color-0': 'bg-primary-0 text-primary-0-fg',
        'color-1': 'bg-primary-1 text-primary-1-fg',
        'color-2': 'bg-primary-2 text-primary-2-fg',
        'color-3': 'bg-primary-3 text-primary-3-fg',
        'color-4': 'bg-primary-4 text-primary-4-fg',
        'color-5': 'bg-primary-5 text-primary-5-fg',
        'color-6': 'bg-primary-6 text-primary-6-fg',
        'color-7': 'bg-primary-7 text-primary-7-fg',
        'color-8': 'bg-primary-8 text-primary-8-fg',
        'color-9': 'bg-primary-9 text-primary-9-fg',
        'color-10': 'bg-primary-10 text-primary-10-fg',
        'color-11': 'bg-primary-11 text-primary-11-fg',
        'color-12': 'bg-primary-12 text-primary-12-fg',
        'color-13': 'bg-primary-13 text-primary-13-fg',
        'color-14': 'bg-primary-14 text-primary-14-fg',
        'color-15': 'bg-primary-15 text-primary-15-fg',        
      }
    },
    secondary: {
      color: 'bg-secondary',
      foreground: 'text-secondary-fg',
      range: {
        'color-0': 'bg-secondary-0 text-secondary-0-fg',
        'color-1': 'bg-secondary-1 text-secondary-1-fg',
        'color-2': 'bg-secondary-2 text-secondary-2-fg',
        'color-3': 'bg-secondary-3 text-secondary-3-fg',
        'color-4': 'bg-secondary-4 text-secondary-4-fg',
        'color-5': 'bg-secondary-5 text-secondary-5-fg',
        'color-6': 'bg-secondary-6 text-secondary-6-fg',
        'color-7': 'bg-secondary-7 text-secondary-7-fg',
        'color-8': 'bg-secondary-8 text-secondary-8-fg',
        'color-9': 'bg-secondary-9 text-secondary-9-fg',
        'color-10': 'bg-secondary-10 text-secondary-10-fg',
        'color-11': 'bg-secondary-11 text-secondary-11-fg',
        'color-12': 'bg-secondary-12 text-secondary-12-fg',
        'color-13': 'bg-secondary-13 text-secondary-13-fg',
        'color-14': 'bg-secondary-14 text-secondary-14-fg',
        'color-15': 'bg-secondary-15 text-secondary-15-fg',           
      }
    }, 
    accent: {
      color: 'bg-accent',
      foreground: 'text-accent-fg',
      range: {
        'color-0': 'bg-accent-0 text-accent-0-fg',
        'color-1': 'bg-accent-1 text-accent-1-fg',
        'color-2': 'bg-accent-2 text-accent-2-fg',
        'color-3': 'bg-accent-3 text-accent-3-fg',
        'color-4': 'bg-accent-4 text-accent-4-fg',
        'color-5': 'bg-accent-5 text-accent-5-fg',
        'color-6': 'bg-accent-6 text-accent-6-fg',
        'color-7': 'bg-accent-7 text-accent-7-fg',
        'color-8': 'bg-accent-8 text-accent-8-fg',
        'color-9': 'bg-accent-9 text-accent-9-fg',
        'color-10': 'bg-accent-10 text-accent-10-fg',
        'color-11': 'bg-accent-11 text-accent-11-fg',
        'color-12': 'bg-accent-12 text-accent-12-fg',
        'color-13': 'bg-accent-13 text-accent-13-fg',
        'color-14': 'bg-accent-14 text-accent-14-fg',
        'color-15': 'bg-accent-15 text-accent-15-fg',           
      }      
    },        
  }
})

</script>

<template>
  <Header />
  <aside class="main-aside">
    <p>Aside</p>
  </aside>
  <main class="main-area">
    <div class="md:flex md:hue-s [--color-hue:var(--secondary-h)] bg-grey-2">
      <!-- <NuxtWelcome /> -->
      <p class="test font-serif bg-grey-1 block w-full text-primary-fg-soft text-display-xl">Hi. My name is Justin</p>    
    </div>  
    <div class="wrapper">
      <div class="layout-grid layout-grid--column-count grid-layout-col-count-3 [--column-size:40ch]">
        <div>
          <h3>Typography</h3>
          <p class="text-display-2xl leading-none">Text</p>
          <p class="text-display-xl leading-tight">Text</p>
          <p class="text-display-lg">Text</p>
          <p class="text-display-md">Text</p>
          <p class="text-display-sm">Text</p>
          <p class="text-display-xs">Text</p>
          <p class="text-xl">Text</p>
          <p class="text-lg">Text</p>
          <p class="text-md">Text</p>
          <p class="text-sm">Text</p>
          <p class="text-xs">Text</p>
          <p class="text-xxs">Text</p>
        </div>
        <div class="flex flex-col gap-y-sm">
          <h3>Iconography</h3>
          <div class="text-display-2xl inline-flex">
            <Icon name="uil:github" color="black" />
          </div>        
          <div class="text-display-xl inline-flex">
            <Icon name="uil:github" color="black" />
          </div>        
          <div class="text-display-lg inline-flex">
            <Icon name="uil:github" color="black" />
          </div>
          <div class="text-display-md inline-flex">
            <Icon name="uil:github" color="black" />
          </div>        
          <div class="text-display-sm inline-flex">
            <Icon name="uil:github" color="black" />
          </div>        
          <div class="text-display-xs inline-flex">
            <Icon name="uil:github" color="black" />
          </div>        
          <div class="text-xl inline-flex">
            <Icon name="uil:github" color="black" />
          </div>        
          <div class="text-lg inline-flex">
            <Icon name="uil:github" color="black" />
          </div>             
          <div class="text-md inline-flex">
            <Icon name="uil:github" color="black" />
          </div>             
          <div class="text-sm inline-flex">
            <Icon name="uil:github" color="black" />
          </div>                      
          <div class="text-xs inline-flex">
            <Icon name="uil:github" color="black" />
          </div>             
          <div class="text-xxs inline-flex">
            <Icon name="uil:github" color="black" />
          </div>                   
        </div>      
        <div class="flex flex-col gap-y-sm">
          <h3>Type / Icon Pairing</h3>
          <p class="text-display-2xl inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>        
          <p class="text-display-xl inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>        
          <p class="text-display-lg inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>
          <p class="text-display-md inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>        
          <p class="text-display-sm inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>        
          <p class="text-display-xs inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>        
          <p class="text-xl inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>        
          <p class="text-lg inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>             
          <p class="text-md inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>             
          <p class="text-sm inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>                      
          <p class="text-xs inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>             
          <p class="text-xxs inline-flex items-center gap-rel-0.5">
            <Icon name="uil:github" color="black" />
            <span>Text</span>
          </p>           
        </div>
        <div>
          <h3>Headings</h3>
          <p class="heading heading-2xl">2XL heading</p>
          <p class="heading heading-xl">XL heading</p>
          <p class="heading heading-lg">LG heading</p>
          <p class="heading heading-md">MD heading</p>
          <p class="heading heading-sm">SM heading</p>
          <p class="heading heading-xs">XS heading</p>
          <p class="heading">Default heading</p>
        </div>      
      </div>
    </div>
  
    <template v-for="(color, key) in styleDef.colors" :key="i">
        <div :class="color.color" class="grid place-content-center p-3">
          <p :class="color.foreground">{{ key }}</p>
        </div>
      </template>  
  
      <div v-for="(color, key) in styleDef.colors" :key="key" class="layout-grid grid-layout-col-count-1">
        <div v-for="(entry, entryKey) in color.range" :class="entry" class="lg:grid place-content-center p-md">
          <p>{{key}}-{{ entryKey }}</p>
        </div>
      </div>      
  
  
      <div class="h-lg w-lg size-lg grid place-content-center rounded-full bg-primary">
        <p>Hello</p>
      </div>
  </main>
</template>
