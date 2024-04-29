<script setup lang="ts">
import type { SystemFontNames, SitePropSettings } from "@/types";

const sitePropSettings = defineModel<SitePropSettings>("sitePropSettings");

const selectedBodyFont = ref("");
const selectedHeadingFont = ref("");
const baseFontSizePx = ref();
const textSizeIncrementProxy = ref();
const textFrameRatio = ref();
const textFrameY = ref();
const spaceIncrement = ref();
const unitMax = ref();
const unitFluid = ref();
const radius = ref();

const systemFonts: Ref<SystemFontNames[]> = ref([
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

onMounted(() => {
  if (sitePropSettings.value) {
    const styles = getPropComputedStyle(document.documentElement);

    const basePx = splitValueAndUnit(styles("--font-size-base-px"));
    if (basePx) {
      const [value] = basePx;
      if (value) {
        baseFontSizePx.value = Number(value);
      }
    }

    const textSizeIncr = splitValueAndUnit(styles("--text-size-increment"));
    if (textSizeIncr) {
      const [value] = textSizeIncr;
      if (value) {
        textSizeIncrementProxy.value = Number(value);
      }
    }

    const spaceIncr = splitValueAndUnit(styles("--space-increment"));
    if (spaceIncr) {
      const [value] = spaceIncr;
      if (value) {
        spaceIncrement.value = Number(value);
      }
    }

    const radiusVal = splitValueAndUnit(styles("--radius"));
    if (radiusVal) {
      const [value] = radiusVal;
      if (value) {
        radius.value = Number(value);
      }
    }

  }
});

watchEffect(() => {
  if (selectedBodyFont.value && sitePropSettings.value) {
    sitePropSettings.value.fonts["font-base"].name = selectedBodyFont.value;
  }
  if (selectedHeadingFont.value && sitePropSettings.value) {
    sitePropSettings.value.fonts["heading-font-family"].name =
      selectedHeadingFont.value;
  }
  if (baseFontSizePx.value && sitePropSettings.value) {
    sitePropSettings.value.size["font-size-base-px"].value =
      baseFontSizePx.value.toString();
  }
  if (textSizeIncrementProxy.value && sitePropSettings.value) {
    sitePropSettings.value.size["text-size-increment"].value =
      textSizeIncrementProxy.value.toString();
  }
  if (spaceIncrement.value && sitePropSettings.value) {
    sitePropSettings.value.size["space-increment"].value =
      spaceIncrement.value.toString();
  }

  if (radius.value && sitePropSettings.value) {
    sitePropSettings.value.size["radius"].value =
      radius.value.toString();
  }  
});
</script>

<template>
  <div
    v-if="showMenu"
    class="ui-settings-panel col-start-2 col-end-4 row-span-full bg-light/90 w-56 h-full ml-auto mr-0 z-50"
  >
    <div class="px-sm">
      <Dropdown
        :options="systemFonts"
        @change="(val) => (selectedBodyFont = val.value.name)"
        optionLabel="name"
        placeholder="Select a body font"
        class="w-full block"
      />

      <Dropdown
        :options="systemFonts"
        @change="(val) => (selectedHeadingFont = val.value.name)"
        optionLabel="name"
        placeholder="Select a heading font"
        class="w-full block"
      />

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Base font size</h4>
        <p>{{ baseFontSizePx }}</p>
        <!-- <InputText v-model.number="baseFontSize" :min="12" :max="18" class="w-full mb-3" /> -->
        <Slider
          v-model="baseFontSizePx"
          :step="1"
          :min="12"
          :max="18"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Text size increment</h4>
        <p>
          {{ textSizeIncrementProxy }}
        </p>
        <Slider
          v-model="textSizeIncrementProxy"
          :step="0.025"
          :min="1.2"
          :max="1.4"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Space increment</h4>
        <p>
          {{ spaceIncrement }}
        </p>
        <Slider
          v-model="spaceIncrement"
          :step="0.001"
          :min="1.1"
          :max="2"
          class="w-full"
        />
      </div>

      <div class="flex flex-col justify-content-center min-h-8">
        <h4>Radius</h4>
        <p>
          {{ radius }}
        </p>
        <Slider
          v-model="radius"
          :step="0.025"
          :min="0"
          :max="4"
          class="w-full"
        />
      </div>

    </div>
  </div>
</template>
