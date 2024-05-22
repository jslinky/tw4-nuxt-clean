<script setup lang="ts">
// import { components } from '~/slices'
import { components } from "../slices";

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home', {
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

  <Hero />

<!-- <DemoHomepageTempSectionOne /> -->

<DemoHomepageTempSectionTwo />

<DemoHomepageTempSectionThree />

<DemoHomepageTempSectionFour />

<DemoHomepageTempSectionFive />

<DemoHomepageTempSectionSix />

<DemoHomepageTempSectionSeven />

<DemoHomepageTempSectionNine />

<DemoHomepageTempSectionTen />

<DemoHomepageTempSectionEleven />

<DemoHomepageTempSectionTwelve />

<DemoHomepageTempSectionThirteen />

<DemoHomepageTempSectionFourteen />

<DemoHomepageTempSectionFifthteen />

<Feature />

<Faq />

<div
  class="flex flex-col md:flex-row text-center md:text-left gap-5 items-center justify-between p-[10vmin] md:p-5 bg-white rounded-lg shadow-sm"
>
  <div class="text-lg max-w-xs md:max-w-none">
    <strong>Ready to give it a try?</strong> Start a trial completely free for
    14 days <span class="hidden lg:inline">and build your publication</span>
  </div>
  <div class="flex-shrink-0 flex gap-5">
    <a
      class="plausible-event-name=Signup-CTA-clicked inline-flex items-center justify-center text-md font-medium text-white px-5 py-4 rounded-md"
      href="https://account.ghost.org/signup/"
      >Test it out now</a
    >
    <a
      class="inline-flex items-center justify-center text-md font-medium bg-white text-black border border-base px-5 py-4 rounded-md"
      href="https://account.ghost.org/signin/"
      >Sign in</a
    >
  </div>
</div>

</template>
