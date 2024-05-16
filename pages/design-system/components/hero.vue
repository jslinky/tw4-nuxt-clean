<script setup lang="ts">
import { components } from "@/slices";
import type { HeroSlice, HeroSliceVariation } from "~/prismicio-types";

const prismic = usePrismic();
const { data: page } = useAsyncData("[hero_component_library]", () =>
  prismic.client.getSingle("hero_component_library")
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
type HeroVariations = (typeof heroVariations)[number];

/// Type this up later
const selectedHeroType = ref("default");

const heroVariations = [
  "default",
  "defaultReversed",
  "hero2",
  "hero3",
  "hero4"
] as const;

const getSelectedHeroType = computed(() =>
  page?.value && page.value.data.slices
    ? [
        page.value.data.slices.find(
          (component) => component.variation === selectedHeroType.value
        ) as HeroSlice,
      ]
    : []
);
</script>

<template>
  <div class="@container">
    <div data-admin>
      <select id="hero-options" v-model="selectedHeroType" name="hero-options">
        <option
          v-for="(options, index) in heroVariations"
          :key="index"
          :value="options"
        >
          {{ options }}
        </option>
      </select>
    </div>
    <SliceZone
      wrapper="div"
      :slices="getSelectedHeroType"
      :components="components"      
    />
  </div>
</template>
