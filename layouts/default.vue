<template>
  <AdminHeader v-if="uiSettings" />
  <Header />
  <aside class="main-aside bg-primary">
    <slot name="aside"></slot>
  </aside>
  <main class="main-area"">
    <slot />
  </main>
  <UiSettingsPanel v-model:tokenBodyFont="settings" :showMenu="uiSettings" />
  <button
    @click="uiSettings = !uiSettings"
    class="btn btn-circle fixed mr-lg bottom-lg z-50 right-0"
  >
    <Icon name="uil:cog" color="black" />
  </button>
</template>

<script lang="ts" setup>
import { useSiteSettings } from "~/composables/useSiteSettings";

const uiSettings = useState("ui-settings", () => false);
const settings = useSiteSettings();

onMounted(() => {

  function updateFont(fontPropName: string, fontName: string): void {
    document.body.style.setProperty(
          `${fontPropName}`,
          `var(--font-family-${fontName})`
        );    
  }

  watch(
    [() => settings.value.fonts.bodyFont.name, () => settings.value.fonts.headingFont.name],
    ([newBodyFont, newHeadingFont]) => {
      if(newBodyFont) {
        updateFont('--font-base', newBodyFont)
      }
      if(newHeadingFont) {
        updateFont('--heading-font-family', newHeadingFont)
      }      
    },
    { deep: true }
  );
});


</script>

<style></style>
