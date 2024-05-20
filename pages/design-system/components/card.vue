<script setup lang="ts">
import { components } from "~/slices";
import { SliceZone } from "@prismicio/vue";

const prismic = usePrismic();
const { data: page } = useAsyncData("[card_component_library]", () =>
  prismic.client.getSingle("card_component_library", {
    fetchLinks: [
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
    wrapper="div"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="contents"
  />
</template>
