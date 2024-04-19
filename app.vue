<script setup lang="ts">
import { reactive } from 'vue';
import Header from "@/components/Header.vue";

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
    grey: {
      color: 'bg-color-grey-8',
      foreground: 'text-grey-1',
      range: {
        'color-0': 'bg-grey-0 text-grey-0',
        'color-1': 'bg-grey-1 text-grey-1',
        'color-2': 'bg-grey-2 text-grey-2',
        'color-3': 'bg-grey-3 text-grey-3',
        'color-4': 'bg-grey-4 text-grey-4',
        'color-5': 'bg-grey-5 text-grey-5',
        'color-6': 'bg-grey-6 text-grey-6',
        'color-7': 'bg-grey-7 text-grey-7',
        'color-8': 'bg-grey-8 text-grey-8',
        'color-9': 'bg-grey-9 text-grey-9',
        'color-10': 'bg-grey-10 text-grey-10',
        'color-11': 'bg-grey-11 text-grey-11',
        'color-12': 'bg-grey-12 text-grey-12',
        'color-13': 'bg-grey-13 text-grey-13',
        'color-14': 'bg-grey-14 text-grey-14',
        'color-15': 'bg-grey-15 text-grey-15',           
      }      
    },            
  }
})

</script>

<template>
  <Header />
  <!-- <aside class="main-aside">
    <p>Aside</p>
  </aside> -->
  <main class="main-area flow">
    <Hero />  
    <section class="layout layout-grid">
      <div>
        <div class="p-card p-component" data-pc-name="card" data-pc-section="root"><div class="p-card-header" data-pc-section="header"><img alt="user header" class="w-full" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"></div><div class="p-card-body" data-pc-section="body"><div class="p-card-caption" data-pc-section="caption"><div class="p-card-title" data-pc-section="title">Advanced Card</div><div class="p-card-subtitle" data-pc-section="subtitle">Card subtitle</div></div><div class="p-card-content" data-pc-section="content"><p class="m-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! </p></div><div class="p-card-footer" data-pc-section="footer"><div class="flex gap-3 mt-1"><button class="p-button p-component p-button-secondary p-button-outlined w-full" type="button" aria-label="Cancel" data-pc-name="button" data-pc-section="root" data-p-severity="secondary" data-pd-ripple="true"><!----><span class="p-button-label" data-pc-section="label">Cancel</span><!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></button><button class="p-button p-component w-full" type="button" aria-label="Save" data-pc-name="button" data-pc-section="root" data-pd-ripple="true"><!----><span class="p-button-label" data-pc-section="label">Save</span><!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></button></div></div></div></div>      
      </div>
      <div>
        <div class="p-card p-component" data-pc-name="card" data-pc-section="root"><div class="p-card-header" data-pc-section="header"><img alt="user header" class="w-full" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"></div><div class="p-card-body" data-pc-section="body"><div class="p-card-caption" data-pc-section="caption"><div class="p-card-title" data-pc-section="title">Advanced Card</div><div class="p-card-subtitle" data-pc-section="subtitle">Card subtitle</div></div><div class="p-card-content" data-pc-section="content"><p class="m-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! </p></div><div class="p-card-footer" data-pc-section="footer"><div class="flex gap-3 mt-1"><button class="p-button p-component p-button-secondary p-button-outlined w-full" type="button" aria-label="Cancel" data-pc-name="button" data-pc-section="root" data-p-severity="secondary" data-pd-ripple="true"><!----><span class="p-button-label" data-pc-section="label">Cancel</span><!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></button><button class="p-button p-component w-full" type="button" aria-label="Save" data-pc-name="button" data-pc-section="root" data-pd-ripple="true"><!----><span class="p-button-label" data-pc-section="label">Save</span><!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></button></div></div></div></div>      
      </div>
    </section>
    <section class="@container col-span-full">
      <div class="card w-full bg-base-100 shadow-xl p-0"><figure class="card-picture"><img src="https://picsum.photos/400/200" alt="placeholder"></figure><div class="card-body"><h2 class="card-title">Shoes!</h2><p>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions justify-end"><button class="btn btn-primary">Buy Now</button></div></div></div>      
    </section>
    <div>
      <button>Button</button>      
      <button class="btn-neutral">Button</button>
      <button class="btn-primary">Button</button>
      <button class="btn-secondary">Button</button>
      <button class="btn-accent">Button</button>
      <button class="btn-ghost">Button</button>
      <button class="btn-link">Button</button>
    </div>
    <div>
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
  
    <template v-for="(color, key) in styleDef.colors" :key="key">
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
