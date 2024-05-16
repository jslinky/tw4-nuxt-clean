<script setup lang="ts">
import { components } from "@/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("[feature_component_library]", () =>
  prismic.client.getSingle("feature_component_library")
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


/// Type this up later
const selectedType = ref("default");

const variations = [
  "default",
  "feature2",
  "feature3",
  "defaultReversed",
] as const;

// const getSelectedType = computed(() =>
//   page?.value && page.value.data.slices
//     ? [
//         page.value.data.slices.find(
//           (component) => component.variation === selectedType.value
//         ),
//       ]
//     : []
// );

const getSelectedType = computed(() => page.value.data.slices);


</script>

<template>
  <div class="@container">
    <!-- <div data-admin>
      <select id="feature-options" v-model="selectedType" name="feature-options">
        <option
          v-for="(options, index) in variations"
          :key="index"
          :value="options"
        >
          {{ options }}
        </option>
      </select>
    </div> -->
    <SliceZone
      wrapper="div"
      :slices="getSelectedType"
      :components="components"      
    />
  </div>
</template>
