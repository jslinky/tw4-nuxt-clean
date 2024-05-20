<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice, index, slices, context } = defineProps(
  getSliceComponentProps<Content.CardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const cardDataArr = computed(() => {
  return slice.items
    .map((item) => {
      return item.card;
    })
    .filter((card) =>
      isFilled.contentRelationship(card)
    ) as unknown as Content.CardDocument[];
});

const getIconSize = (icon_size: string) => {
  let size = "1em";

  switch (icon_size) {
    case "xxs":
      size = "var(--spacing-rel-2_5)";
      break;
    case "xs":
      size = "var(--spacing-rel-3)";
      break;
    case "sm":
      size = "var(--spacing-rel-3_5)";
    case "md":
      size = "var(--spacing-rel-4)";
    case "lg":
      size = "var(--spacing-rel-5)";
    case "xl":
      size = "var(--spacing-rel-6)";
    case "2xl":
      size = "var(--spacing-rel-7)";
    case "3xl":
      size = "var(--spacing-rel-8)";
    default:
      break;
  }

  return size;
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="contents"
  >
    Placeholder component for card (variation: {{ slice.variation }}) Slices

    <!-- <div class="col-start-2 col-end-2">
      <pre>
        {{ slice.primary }}
      </pre>
      <pre data-surface-theme="primary-light" class="region">
        {{cardDataArr}}
      </pre>
    </div> -->

    <section
      class="region @container text-center flow"
      :class="{
        'col-span-full': slice?.primary?.expand_to_full_width ?? false,
        'col-start-2 col-end-2': !slice?.primary?.expand_to_full_width ?? true,
      }"
    >
      <div class="layout-grid">
        <div v-for="card of cardDataArr">
          {{ card.data }}
          <Card
            :data-surface-theme="card?.data?.surface_background"
            :is-stacked="card?.data?.stacked_layout"
            :is-column-layout="card?.data?.column_layout"
            :picture="{
              ratio: {
                column: card?.data?.column_image_ratio,
                row: card?.data?.row_image_ratio,
              },
            }"
            :align-items="{
              column: card?.data?.align_column_body_content,
              row: card?.data?.align_row_body_content,
            }"
            :justify-content="{
              column: card?.data?.justify_column_body_content,
              row: card?.data?.justify_row_body_content,
            }"
            :text-align="{
              column: card?.data?.content_column_text_align ?? 'start',
              row: card?.data?.content_row_text_align ?? 'start',
            }"            
            :clip="card?.data?.overflow_clip"
            :reverse-order="card?.data?.reverse_source_order"
          >
            <template #picture>
              <PrismicImage :field="card?.data?.image" />
            </template>
            <template #caption="{ css }">
              <PrismicRichText
                v-if="card?.data?.tagline"
                :class="css.tagline"
                :field="card?.data?.tagline"
              />
              <PrismicRichText
                v-if="card?.data?.title"
                :class="cn(css.title, card?.data?.title_type ? `heading-${card.data.title_type}` : 'heading-xs')"
                :field="card?.data?.title"                
              />
              <PrismicRichText
                v-if="card?.data?.sub_title"
                :class="cn(css.subtitle, card?.data?.sub_title_size ? `text-${card.data.sub_title_size}` : 'text-md')"
                :field="card?.data?.sub_title"
              />
            </template>
            <template #default>
              <PrismicRichText :field="card?.data?.content" />              
            </template>
            <template #footer>
              <div class="flex gap-md">
                <template
                  v-for="(button, index) of card?.data?.slices.filter(
                    (item) => item.slice_type === 'button'
                  )"
                  :key="index"
                >
                  <button class="btn" :class="{
                    'btn-neutral': button?.primary?.button_style === 'neutral',
                    'btn-primary': button?.primary?.button_style === 'primary',
                    'btn-secondary': button?.primary?.button_style === 'secondary',
                    'btn-accent': button?.primary?.button_style === 'accent',
                    'btn-ghost': button?.primary?.button_style === 'ghost',
                    'btn-link': button?.primary?.button_style === 'link',
                    'btn-outline': button?.primary?.button_style === 'outline-default',
                    'btn-outline btn-primary': button?.primary?.button_style === 'outline-primary',
                    'btn-outline btn-secondary': button?.primary?.button_style === 'outline-secondary',
                    'btn-outline btn-accent': button?.primary?.button_style === 'outline-accent',
                    'flex-row-reverse': button?.primary?.icon_position === 'right',
                    'flex-col': button?.primary?.icon_position === 'top',
                    'flex-col-reverse': button?.primary?.icon_position === 'bottom',
                    'btn-sm': button?.primary?.button_size === 'sm',
                    'btn-md': button?.primary?.button_size === 'md',
                    'btn-lg': button?.primary?.button_size === 'lg',
                  }">
                    <Icon
                      v-if="button?.primary?.icon_svg_name"
                      :name="button.primary.icon_svg_name"
                      :size="
                        button?.primary?.icon_size
                          ? getIconSize(button.primary.icon_size)
                          : '1em'
                      "
                      color="currentColor"
                    />
                    <span>{{ button.primary.text }}</span>
                  </button>
                </template>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>
  </section>
</template>
