<template>
    <div class="hero" :class="{'col-span-full': spanFull, 'hero--full-overlay': selectedHeroType === 'overlay', 'hero--top-down': selectedHeroType === 'top-down'}">
      <div data-admin>
        <select v-model="selectedHeroType" name="hero-options" id="hero-options">
          <option v-for="options in heroVariations" :value="options.name">{{ options.name }}</option>
        </select>
      </div>
      <div class="hero__container">
        <article class="hero-content wrapper-grid bg-grey-1 [--end-col:0]">
          <slot>
            <component :is="currentComponent" />
          </slot>
        </article>
      </div>
    </div>
</template>

<script lang="ts" setup>


type HeroOptions = {
  spanFull?: boolean;
};

type HeroVariations = 'classic' | 'three-col' | 'overlay' | 'top-down';
type HeroVariationOptions = {
  name: HeroVariations;
  component: ReturnType<typeof defineAsyncComponent>;
}

const { spanFull = true } = defineProps<HeroOptions>()

const selectedHeroType: Ref<HeroVariations> = ref('classic')

const heroVariations: HeroVariationOptions[] = [
  {
    name: 'classic',
    component: defineAsyncComponent(() => import('./Classic.vue'))
  },
  {
    name: 'three-col',
    component: defineAsyncComponent(() => import('./ThreeCol.vue'))
  },
  {
    name: 'overlay',
    component: defineAsyncComponent(() => import('./Overlay.vue'))
  },
  {
    name: 'top-down',
    component: defineAsyncComponent(() => import('./TopDown.vue'))
  }      
]

const currentComponent = computed(() => {
  const variation = heroVariations.find(v => v.name === selectedHeroType.value);
  return variation ? variation.component : defineAsyncComponent(() => import('./Classic.vue'));
});

</script>

<style>
  [data-admin] {
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    z-index: 50;
  }
</style>