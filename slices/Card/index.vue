<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import type {
  CardSliceDefaultPrimary,
  ButtonSliceDefaultPrimary,
} from "~/prismicio-types";

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

const getIconSize = (icon_size: ButtonSliceDefaultPrimary["icon_size"]) => {
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
    case "md (default)":
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

const getGridLayoutType = (
  layout: CardSliceDefaultPrimary["layout_grid_type"]
) => {
  const GRIDCOLCOUNT = "layout-grid layout-grid--column-count";

  let gridLayout = "flex-layout-grid";
  let columnCount = null;

  switch (layout) {
    case "grid":
      gridLayout = "layout-grid";
      break;
    case "grid-1-cols":
      gridLayout = GRIDCOLCOUNT;
      columnCount = "[--column-count:1]";
      break;
    case "grid-2-cols":
      gridLayout = GRIDCOLCOUNT;
      columnCount = "[--column-count:2]";
      break;
    case "grid-3-cols":
      gridLayout = GRIDCOLCOUNT;
      columnCount = "[--column-count:3]";
      break;
    case "grid-4-cols":
      gridLayout = GRIDCOLCOUNT;
      columnCount = "[--column-count:4]";
      break;
    case "grid-5-cols":
      gridLayout = GRIDCOLCOUNT;
      columnCount = "[--column-count:4]";
      break;
    case "grid-6-cols":
      gridLayout = GRIDCOLCOUNT;
      columnCount = "[--column-count:4]";
      break;
    default:
      break;
  }

  return {
    gridLayout,
    columnCount,
  };
};

const cardRefs: Ref<{
  [key: string]: (HTMLElement | Element | ComponentPublicInstance | null)[];
}> = ref({});

const addToRefs = (
  el: HTMLElement | Element | ComponentPublicInstance | null,
  variation: string,
  index: number
) => {
  if (!cardRefs.value[variation]) {
    cardRefs.value[variation] = [];
  }
  if (el) {
    cardRefs.value[variation].push(el);
  }
  // cardRefs.value[variation][index] = el;
};

const useMotion = ref(true); // Change this to control the inclusion of v-motion

// Function to determine the directive
const getMotionDirective = () => (useMotion.value ? "v-motion" : "");

const initial = ref({
  y: 100,
  opacity: 0,
});

const enter = ref({
  y: 0,
  opacity: 1,
});

console.log("cardRefs", cardRefs.value);
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
      :data-surface-theme="slice?.primary?.surface_background"
      :class="{
        'col-span-full': slice?.primary?.expand_to_full_width ?? false,
        'col-start-2 col-end-2': !slice?.primary?.expand_to_full_width ?? true,
      }"
    >
      <div
        :class="[
          Object.values(getGridLayoutType(slice.primary.layout_grid_type)).map(
            (classes) => classes
          ),
          {
            wrapper:
              (slice?.primary?.expand_to_full_width &&
                (slice?.primary?.constrain_content_when_expanded ?? false)) ??
              false,
          },
        ]"
      >
        <div v-for="(card, index) of cardDataArr" :key="index">
          <Card
            :ref="(el) => addToRefs(el, slice.variation, index)"
            :surface-theme="card?.data?.surface_background"
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
            :reverse-source-order="card?.data?.reverse_source_order"
            :reverse-order="{
              column: card?.data?.reverse_column_layout,
              row: card?.data?.reverse_row_layout,
            }"
            :overlay-image="card?.data?.content_overlay_image"
            :overlay-backdrop="card?.data?.content_overlay_backdrop"
            :overlay-backdrop-direction="{
              column: card?.data?.content_overlay_backdrop_dir_column,
              row: card?.data?.content_overlay_backdrop_dir_row,
            }"
            :image-mask="{
              column: card?.data?.image_mask,
              row: card?.data?.row_image_mask,
            }"
            :css="{
              card: card?.data?.class,
              picture: {
                'self-start': card?.data?.column_layout,
              },
            }"
          >
            <template #picture>
              <PrismicImage
                v-if="card?.data?.image"
                :field="card?.data?.image"
              />
            </template>
            <template #caption="{ css }">
              <div :class="['flex items-center gap-x-xs', css.tagline]">
                <Icon
                  v-if="card?.data?.tagline_icon_svg_name"
                  :name="card?.data?.tagline_icon_svg_name"
                  color="var(--color-primary)"
                  :size="
                    card?.data?.tagline_icon_size
                      ? getIconSize(card.data.tagline_icon_size)
                      : '1em'
                  "
                />
                <PrismicRichText
                  v-if="card?.data?.tagline"
                  :field="card?.data?.tagline"
                />
              </div>
              <PrismicRichText
                v-if="card?.data?.title"
                :class="
                  cn(
                    css.title,
                    card?.data?.title_type
                      ? `heading-${card.data.title_type}`
                      : 'heading-xs'
                  )
                "
                :field="card?.data?.title"
              />
              <PrismicRichText
                v-if="card?.data?.sub_title"
                :class="
                  cn(
                    css.subtitle,
                    card?.data?.sub_title_size
                      ? `text-${card.data.sub_title_size}`
                      : 'text-md'
                  )
                "
                :field="card?.data?.sub_title"
              />
            </template>
            <template #default>
              <PrismicRichText :field="card?.data?.content" />
            </template>
            <template #footer>
              <div class="flex gap-md">
                <template
                  v-if="
                    card?.data?.slices &&
                    card?.data?.slices.length > 0 &&
                    card?.data?.slices.filter(
                      (item) => item.slice_type === 'button'
                    )
                  "
                  v-for="(button, index) of card?.data?.slices.filter(
                    (item) => item.slice_type === 'button'
                  )"
                  :key="index"
                >
                  <button
                    class="btn"
                    :class="{
                      'btn-neutral':
                        button?.primary?.button_style === 'neutral',
                      'btn-primary':
                        button?.primary?.button_style === 'primary',
                      'btn-secondary':
                        button?.primary?.button_style === 'secondary',
                      'btn-accent': button?.primary?.button_style === 'accent',
                      'btn-ghost': button?.primary?.button_style === 'ghost',
                      'btn-link': button?.primary?.button_style === 'link',
                      'btn-outline':
                        button?.primary?.button_style === 'outline-default',
                      'btn-outline btn-primary':
                        button?.primary?.button_style === 'outline-primary',
                      'btn-outline btn-secondary':
                        button?.primary?.button_style === 'outline-secondary',
                      'btn-outline btn-accent':
                        button?.primary?.button_style === 'outline-accent',
                      'flex-row-reverse':
                        button?.primary?.icon_position === 'right',
                      'flex-col': button?.primary?.icon_position === 'top',
                      'flex-col-reverse':
                        button?.primary?.icon_position === 'bottom',
                      'btn-sm': button?.primary?.button_size === 'sm',
                      'btn-md': button?.primary?.button_size === 'md',
                      'btn-lg': button?.primary?.button_size === 'lg',
                    }"
                  >
                    <Icon
                      v-if="button?.primary?.icon_svg_name"
                      :name="button.primary.icon_svg_name"
                      :size="
                        card?.data?.tagline_icon_size
                          ? getIconSize(card.data.tagline_icon_size)
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
