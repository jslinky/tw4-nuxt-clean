<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice, index, slices, context } = defineProps(
  getSliceComponentProps<Content.FeatureSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const surfaceVariations = useSurfaceTheme();

const selectedSurfaceType = ref(slice.primary?.surface_background ?? '');

import PrismicFeatureTen from "../../purity-components/components/feature/prismic/PrismicFeatureTen.vue";

</script>

<template>
  <section
    :data-slice-type="slice.slice_type ?? 'feature'"
    :data-slice-variation="slice.variation ?? 'default'"
    class="col-start-2 col-end-2"
  >
    Placeholder component for feature (variation: {{ slice.variation ?? 'default' }}) Slices

    <!-- <div data-admin>
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
    </div> -->

    <!-- 

    {{ slice.primary.surface_background }}
    -->

    <template v-if="slices">    
      <FeatureLayoutOne :slice="slice" v-if="slice.variation === 'default' || slice.variation === 'defaultReversed'">
        <template #feature-image>
          <PrismicImage :field="slice.primary.image" />        
        </template>
        <template #feature-tagline>
          <PrismicRichText :field="slice.primary.tagline" />
        </template>
        <template #feature-title>
          <PrismicRichText 
          :field="slice.primary.title" 
          :class="slice.primary.title_type ? `heading-${slice.primary.title_type}` : 'heading-md'"
          />
        </template>
        <template #feature-subtitle>
          <PrismicRichText :field="slice.primary.sub_title" />
        </template>
        <template #feature-content>
          <PrismicRichText :field="slice.primary.content" />
        </template>
        <template #feature-footer>
          <PrismicRichText :field="slice.primary.footer" />
        </template>
        <template #feature-buttons>
          <div class="flex gap-md">
            <template v-for="(item, index) in slice.items" :key="`button-${index}`">
              <PrismicLink 
              :field="item.button_link" 
              class="btn"
              :class="item.button_style ? `btn-${item.button_style}` : ''"
              >{{ item.button_text }}</PrismicLink>
            </template>
          </div>
        </template>
      </FeatureLayoutOne>
      <FeatureLayoutFour :slice="slice" v-if="slice.variation === 'feature2' || slice.variation === 'feature3'">
        <template #feature-image>
          <PrismicImage :field="slice.primary.image" />        
        </template>
        <template #feature-tagline>
          <PrismicRichText :field="slice.primary.tagline" />
        </template>
        <template #feature-title>
          <PrismicRichText 
          :field="slice.primary.title" 
          :class="slice.primary.title_type ? `heading-${slice.primary.title_type}` : 'heading-md'"
          />
        </template>
        <template #feature-subtitle>
          <PrismicRichText :field="slice.primary.sub_title" />
        </template>
        <template #feature-content>
          <PrismicRichText :field="slice.primary.content" />
        </template>
        <template #feature-footer>
          <PrismicRichText :field="slice.primary.footer" />
        </template>
        <template #feature-buttons>
          <div class="flex gap-md">
            <template v-for="(item, index) in slice.items" :key="`button-${index}`">
              <PrismicLink 
              v-if="item.button_link && item.button_text"
              :field="item.button_link" 
              class="btn"
              :class="item.button_style ? `btn-${item.button_style}` : ''"
              >{{ item.button_text }}</PrismicLink>
            </template>
          </div>
        </template>
  
        <template #feature-content-repeat>
          
        </template>
  
      </FeatureLayoutFour>
  
      <!-- <FeatureLayoutSeven v-if="slice.variation === 'feature3'" /> -->

      <PrismicFeatureTen v-if="slice.variation === 'feature10'" :slice="slice" />

    </template>
    <template v-else>
      <p>No matching components</p>
    </template>




    <!-- <PrismicRichText :field="item.sub_heading" /> -->
    <!-- <PrismicRichText :field="item.sub_content" /> -->

  </section>
</template>
