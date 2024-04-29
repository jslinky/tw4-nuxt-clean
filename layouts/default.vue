<template>
  <AdminHeader v-if="uiSettings" />
  <Header />
  <aside class="main-aside bg-primary">
    <slot name="aside"></slot>
  </aside>
  <main class="main-area"">
    <slot />
  </main>
  <UiSettingsPanel v-if="propsLoaded" v-model:sitePropSettings="settings" :showMenu="uiSettings" />
  <button
    v-if="propsLoaded"
    @click="uiSettings = !uiSettings"
    class="btn btn-circle fixed mr-lg bottom-lg z-50 right-0"
  >
    <Icon name="uil:cog" color="black" />
  </button>
</template>

<script lang="ts" setup>
import { useSiteSettings } from "~/composables/useSiteSettings";
import splitValueAndUnit from "@/utils/splitValueAndUnit"
import globalFontProps from "@/data/config/global-font-props"
import sizeProps from "@/data/config/size-props"

import type { SitePropSettings, GlobalFontConfigPropNames, SizeConfigKeys } from "~/types";

const uiSettings = useState("ui-settings", () => false);
const settings: globalThis.Ref<SitePropSettings> = useSiteSettings();
const propsLoaded = ref(false)

const getPropValues = () => {
  const computedRootStyles = window.getComputedStyle(document.documentElement)

  Object.entries(globalFontProps.fonts).forEach(([key, value]) => {
    if (key as GlobalFontConfigPropNames) {
      const propValue = computedRootStyles.getPropertyValue(`--${key}`).trim();
      if (propValue) {
        settings.value.fonts[key as GlobalFontConfigPropNames].name = propValue;
      }
    }
  });

  Object.entries(sizeProps).forEach(([key, config]) => {
    const propValue = computedRootStyles.getPropertyValue(`--${key}`).trim(); 
    const propValueResult = splitValueAndUnit(propValue);

    if (propValueResult) {
      const [value, unit] = propValueResult;
      if (key as SizeConfigKeys) {
      if (value) {
        settings.value.size[key as SizeConfigKeys] = { value, unit }; // Properly update nested objects
      }
    }
  }
  });    
}


onMounted(() => {

  getPropValues()
  propsLoaded.value = true


  watchEffect(() => {

    const newBodyFont = settings.value.fonts["font-base"].name;
    const newHeadingFont = settings.value.fonts["heading-font-family"].name;
    const newBaseFontSizePx = settings.value.size["font-size-base-px"]
    const textSizeIncrement = settings.value.size["text-size-increment"]
    const textFrameRatio = settings.value.size["text-frame-ratio"]
    const textFrameY = settings.value.size["text-frame-y"]
    const spaceIncrement = settings.value.size["space-increment"]
    const unitMax = settings.value.size["unit-max"]
    const unitFluid = settings.value.size["unit-fluid"]
    const radius = settings.value.size["radius"]

    if (newBodyFont) {
      updateCustomProp('--font-base', `var(--font-family-${newBodyFont})`)
    }
    if (newHeadingFont) {
      updateCustomProp('--heading-font-family', `var(--font-family-${newHeadingFont})`)
    }
    if (newBaseFontSizePx) {
      updateSizeCustomProp('--font-size-base-px', newBaseFontSizePx)
    }
    if (textSizeIncrement) {
      updateSizeCustomProp('--text-size-increment', textSizeIncrement)
    }
    if (textFrameRatio) {
      updateSizeCustomProp('--text-frame-ratio', textFrameRatio)
    }  
    if (textFrameY) {
      updateSizeCustomProp('--text-frame-y', textFrameY)
    }
    if (spaceIncrement) {
      updateSizeCustomProp('--space-increment', spaceIncrement)
    }
    if (unitMax) {
      updateSizeCustomProp('--unit-max', unitMax)
    }
    if (unitFluid) {
      updateSizeCustomProp('--unit-fluid', unitFluid)
    }
    if (radius) {
      updateSizeCustomProp('--radius', radius)
    }                            
  });  

})


</script>

<style></style>
