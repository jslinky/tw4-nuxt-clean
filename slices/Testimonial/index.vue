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
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="col-span-full"
  >
    Placeholder component for testimonial (variation: {{ slice.variation }})
    Slices


  <!-- <PrismicRichText :field="slice.primary.heading" />  
  <PrismicRichText :field="slice.primary.intro" /> -->

  <!-- <div v-for="testimonial of testimonials" :key="testimonial.data.name ?? ''">
    {{ testimonial.data.name }}
    {{ testimonial.data.job_title }}
    {{ testimonial.data.company_name }}
    <PrismicRichText :field="testimonial.data.quote" />
    <PrismicImage :field="testimonial.data.avatar" />
    <PrismicImage :field="testimonial.data.company_logo" />
  </div> -->
    <TestimonialOne :slice="slice" v-if="slice.variation === 'default'" />
    <TestimonialTwo :slice="slice" v-else-if="slice.variation === 'testimonial2'" />



  </section>
</template>
