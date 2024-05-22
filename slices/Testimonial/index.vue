<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice, index, slices, context } = defineProps(
  getSliceComponentProps<Content.TestimonialSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


const testimonials = computed(() => {
  return slice.items.map((item) => {
    return item.testimonial
  }).filter((testimonial) => isFilled.contentRelationship(testimonial)) as unknown as Content.TestimonialDocument[];
  
});

</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="contents"
  >
    Placeholder component for testimonial (variation: {{ slice.variation }})
    Slices

    <TestimonialOne :slice="slice" v-if="slice.variation === 'default'" />
    <TestimonialTwo :slice="slice" v-else-if="slice.variation === 'testimonial2'" />
  


  </div>
</template>
