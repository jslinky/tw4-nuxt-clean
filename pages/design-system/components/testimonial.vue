<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("[testimonials_component_library]", () =>
  prismic.client.getSingle("testimonials_component_library", {
    fetchLinks: ["testimonial.name", "testimonial.job_title", "testimonial.company_name", "testimonial.avatar", "testimonial.company_logo", "testimonial.quote"],
  
  }),
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
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
