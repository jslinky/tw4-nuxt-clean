<script setup lang="ts">
type FontListSystem =
  | "sans-system-ui"
  | "sans-humanist"
  | "sans-geometric-humanist"
  | "sans-classical-humanist"
  | "sans-neo-grotesque"
  | "sans-industrial"
  | "sans-rounded-sans"
  | "serif-transitional"
  | "serif-old-style"
  | "serif-slab-serif"
  | "serif-antique"
  | "serif-didone"
  | "monospace-slab-serif"
  | "monospace-code"
  | "cursive-handwritten";

const selectedBodyFont = ref();
const selectedHeadingFont = ref();

type SystemFont = Record<'name', FontListSystem>

const systemFonts: Ref<SystemFont[]> = ref([
  { name: "sans-system-ui" },
  { name: "sans-humanist" },
  { name: "sans-geometric-humanist" },
  { name: "sans-classical-humanist" },
  { name: "sans-neo-grotesque" },
  { name: "sans-industrial" },
  { name: "sans-rounded-sans" },
  { name: "serif-transitional" },
  { name: "serif-old-style" },
  { name: "serif-slab-serif" },
  { name: "serif-antique" },
  { name: "serif-didone" },
  { name: "monospace-slab-serif" },
  { name: "monospace-code" },
  { name: "cursive-handwritten" },
]);

defineProps<{
  showMenu: boolean;
}>();

type FontConfig = {
  fonts: {
    bodyFont: {
      name: string;
    };
    headingFont: {
      name: string;
    }
  };
};

const tokenBodyFont = defineModel<FontConfig>('tokenBodyFont');

watch([selectedBodyFont, selectedHeadingFont], ([newBodyFont, newHeadingFont]) => {
  if(newBodyFont) {
    if(tokenBodyFont?.value) {
      tokenBodyFont.value.fonts.bodyFont.name = newBodyFont
    }
  }
  if(newHeadingFont) {
    if(tokenBodyFont?.value) {
      tokenBodyFont.value.fonts.headingFont.name = newHeadingFont
    }
  }  
})

</script>

<template>
  <div
    v-if="showMenu"
    class="ui-settings-panel col-start-2 col-end-4 row-span-full bg-dark/90 w-56 h-full ml-auto mr-0 z-50"
  >
    <!-- <pre class="text-light">Body {{ selectedBodyFont }}</pre>
    <pre class="text-light">Heading {{ selectedHeadingFont }}</pre>    
    <pre class="text-light">Heading {{ tokenBodyFont }}</pre>     -->
    <Dropdown
      :options="systemFonts"
      @change="val => selectedBodyFont = val.value.name"      
      optionLabel="name"
      placeholder="Select a body font"
      class="w-full md:w-14rem block"
    />

    <Dropdown
      :options="systemFonts"
      @change="val => selectedHeadingFont = val.value.name"      
      optionLabel="name"
      placeholder="Select a heading font"
      class="w-full md:w-14rem block"
    />    
  </div>
</template>
