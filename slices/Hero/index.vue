<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice, index, slices, context } = defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const surfaceVariations = useSurfaceTheme();

const selectedSurfaceType = ref(slice.primary?.surface_background);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="col-span-full"
  >
    <!-- Placeholder component for hero (variation: {{ slice.variation }}) Slices -->
    <div data-admin>
      <select
        name="surface-options"
        id="surface-options"
        v-model="selectedSurfaceType"
      >
        <option
          v-for="(options, index) in surfaceVariations"
          :key="index"
          :value="options"
        >
          {{ options }}
        </option>
      </select>
    </div>

    <div
      class="hero"
      :data-surface-theme="selectedSurfaceType"
      :class="{
        'hero--full-overlay': slice.variation === 'hero3',
        'is-overlay': slice.variation === 'hero3' && slice.primary.add_backdrop,
        'hero--top-down': slice.variation === 'hero4',
      }"
    >
      <div class="hero__container">
        <HeroClassic
          v-if="
            slice.variation === 'default' ||
            slice.variation === 'defaultReversed'
          "
          :reverse="slice.variation === 'defaultReversed'"
        >
          <template #hero-content-heading>
            <PrismicRichText
              :field="slice.primary.heading"
              :class="`heading-${slice.primary.heading_type}`"
            />
          </template>
          <template #hero-content-body>
            <PrismicRichText :field="slice.primary.body" />
          </template>
          <template #hero-content-button>
            <PrismicLink :field="slice.primary.button_link" class="btn">{{
              slice.primary.button_text
            }}</PrismicLink>
          </template>
          <template #hero-content-image>
            <PrismicImage :field="slice.primary.image" />
          </template>
        </HeroClassic>
        <HeroThreeCol v-if="slice.variation === 'hero2'">
          <template #hero-content-heading>
            <PrismicRichText
              :field="slice.primary.heading"
              :class="`heading-${slice.primary.heading_type}`"
            />
          </template>
          <template #hero-content-body>
            <PrismicRichText :field="slice.primary.body" />
          </template>
          <template #hero-content-button>
            <PrismicLink :field="slice.primary.button_link" class="btn">{{
              slice.primary.button_text
            }}</PrismicLink>
          </template>
          <template #hero-content-image>
            <PrismicImage :field="slice.primary.image" />
          </template>
          <template #hero-content-image-2>
            <PrismicImage :field="slice.primary.image2" />
          </template>
        </HeroThreeCol>
        <HeroOverlay v-if="slice.variation === 'hero3'">
          <template #hero-content-heading>
            <PrismicRichText
              :field="slice.primary.heading"
              :class="`heading-${slice.primary.heading_type}`"
            />
          </template>
          <template #hero-content-body>
            <PrismicRichText :field="slice.primary.body" />
          </template>
          <template #hero-content-button>
            <PrismicLink :field="slice.primary.button_link" class="btn">{{
              slice.primary.button_text
            }}</PrismicLink>
          </template>
          <template #hero-content-image>
            <PrismicImage :field="slice.primary.image" />
          </template>
        </HeroOverlay>
        <HeroTopDown v-if="slice.variation === 'hero4'">
          <template #hero-content-heading>
            <PrismicRichText
              :field="slice.primary.heading"
              :class="`heading-${slice.primary.heading_type}`"
            />
          </template>
          <template #hero-content-body>
            <PrismicRichText :field="slice.primary.body" />
          </template>
          <template #hero-content-button>
            <PrismicLink :field="slice.primary.button_link" class="btn">{{
              slice.primary.button_text
            }}</PrismicLink>
          </template>
          <template #hero-content-image>
            <PrismicImage :field="slice.primary.image" />
          </template>
        </HeroTopDown>
      </div>
    </div>
  </section>
</template>
