<script setup lang="ts">
// import { components } from '~/slices'
import { components } from "~/slices";

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'cb-homepage', {
    fetchLinks: [
      "testimonial.name",
      "testimonial.job_title",
      "testimonial.company_name",
      "testimonial.avatar",
      "testimonial.company_logo",
      "testimonial.quote",
      "testimonial.rating",
      "card.image",
      "card.title",
      "card.tagline",
      "card.sub_title",
      "card.content",
      "card.reverse_source_order",
      "card.reverse_column_layout",
      "card.reverse_row_layout",
      "card.stacked_layout",
      "card.column_layout",
      "card.column_image_ratio",
      "card.row_image_ratio",
      "card.content_column_text_align",
      "card.content_row_text_align",
      "card.justify_column_body_content",
      "card.justify_row_body_content",
      "card.align_column_body_content",
      "card.align_row_body_content",
      "card.expand_to_full_width",
      "card.surface_background",
      "card.class",
      "card.overflow_clip",
      "card.slices",      
    ],
  })
)

useSeoMeta({
  title: page?.value?.data.meta_title ?? undefined,
  description: page?.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page?.value?.data.meta_image) ?? undefined,
})
</script>

<template>
  <SliceZone
    wrapper="div"
    class="contents"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>