<script setup lang="ts">
import usePrismicClassResolve from "../../../purity-components/composables/usePrismicClassResolve";

import { type Content, isFilled } from "@prismicio/client";
import type { CardRowSliceCardRow1Primary } from "~/prismicio-types";
import type {
  LayoutGrid,
  IconSize,
  RowCardSettings,
} from "../../../purity-components/types/global";

import type * as prismic from "@prismicio/client";

import PrismicCardRowDefault from "../../purity-components/components/card/prismic/PrismicCardRowDefault.vue";
import PrismicCardRowOne from "../../purity-components/components/card/prismic/PrismicCardRowOne.vue";
import PrismicCardRowTwo from "../../purity-components/components/card/prismic/PrismicCardRowTwo.vue";
import PrismicCardRowThree from "../../purity-components/components/card/prismic/PrismicCardRowThree.vue";
import PrismicCardRowFour from "../../purity-components/components/card/prismic/PrismicCardRowFour.vue";
import PrismicCardRowFive from "../../purity-components/components/card/prismic/PrismicCardRowFive.vue";
import PrismicCardRowSix from "../../purity-components/components/card/prismic/PrismicCardRowSix.vue";
import PrismicCardRowSeven from "../../purity-components/components/card/prismic/PrismicCardRowSeven.vue";
import PrismicCardRowEight from "../../purity-components/components/card/prismic/PrismicCardRowEight.vue";
import PrismicCardRowNine from "../../purity-components/components/card/prismic/PrismicCardRowNine.vue";
import PrismicCardRowTen from "../../purity-components/components/card/prismic/PrismicCardRowTen.vue";
import PrismicCardRowEleven from "../../purity-components/components/card/prismic/PrismicCardRowEleven.vue";
import PrismicCardRowTwelve from "../../purity-components/components/card/prismic/PrismicCardRowTwelve.vue";
import PrismicCardRowThirteen from "../../purity-components/components/card/prismic/PrismicCardRowThirteen.vue";
import PrismicCardRowFourteen from "../../purity-components/components/card/prismic/PrismicCardRowFourteen.vue";
import PrismicCardRowSixteen from "../../purity-components/components/card/prismic/PrismicCardRowSixteen.vue";
import PrismicCardRowSeventeen from "../../purity-components/components/card/prismic/PrismicCardRowSeventeen.vue";
import PrismicCardRowEighteen from "../../purity-components/components/card/prismic/PrismicCardRowEighteen.vue";

const { getGridLayoutType, getIconSize } = usePrismicClassResolve<
  LayoutGrid,
  IconSize
>();

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice, index, slices, context } = defineProps(
  getSliceComponentProps<Content.CardRowSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const genLayoutClasses = (layout: LayoutGrid) => {
  return Object.values(getGridLayoutType(layout)).map((classes) => classes);
};

const layoutType = computed(() => {
  let layoutClasses = genLayoutClasses(
    slice.primary.layout_grid_type as LayoutGrid
  );
  if (
    slice.variation === "cardRow3" ||
    slice.variation === "cardRow4" ||
    slice.variation === "cardRow5" ||
    slice.variation === "cardRow6" ||
    slice.variation === "cardRow7" ||
    slice.variation === "cardRow8" ||
    slice.variation === "cardRow9" ||
    slice.variation === "cardRow10" ||
    slice.variation === "cardRow11"
  ) {
    layoutClasses = genLayoutClasses("grid-2-cols" as LayoutGrid);
  }
  if (
    slice.variation === "cardRow12" ||
    slice.variation === "cardRow13" ||
    slice.variation === "cardRow14" ||
    slice.variation === "cardRow16" ||
    slice.variation === "cardRow17" ||
    slice.variation === "cardRow18"
  ) {
    layoutClasses = genLayoutClasses("grid-4-cols" as LayoutGrid);
    layoutClasses.push("[--layout-column-min:20ch]");
  }
  return layoutClasses.join(" ");
});

const wrapperType = computed(() => {
  return {
    wrapper:
      (slice?.primary?.expand_to_full_width &&
        (slice?.primary?.constrain_content_when_expanded ?? false)) ??
      false,
  };
});

const cardRowSettings: ComputedRef<RowCardSettings> = computed(() => {
  const primary = slice?.primary as CardRowSliceCardRow1Primary;

  return {
    column: {
      imageRatio: primary?.column_image_ratio,
      alignBodyContent: primary?.align_column_body_content,
      justifyBodyContent: primary?.justify_column_body_content,
      contentTextAlign: primary?.content_column_text_align,
    },
    row: {
      imageRatio: primary?.row_image_ratio,
      alignBodyContent: primary?.align_row_body_content,
      justifyBodyContent: primary?.justify_row_body_content,
      contentTextAlign: primary?.content_row_text_align,
    },
  };
});

const cardDataArr = computed(() => {
  return slice.primary.card
    .map((item) => {
      return item.card;
    })
    .filter((card) =>
      isFilled.contentRelationship(card)
    ) as unknown as Content.CardDocument[];
});

//// Dabbling with stuff below

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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="contents"
  >
    <div class="col-start-2 col-end-2 text-center">
      Placeholder component for card (variation: {{ slice.variation }}) Slices
    </div>

    <div
      class="region @container text-center flow"
      :data-surface-theme="slice?.primary?.surface_background"
      :class="{
        'col-span-full': slice?.primary?.expand_to_full_width ?? false,
        'col-start-2 col-end-2': !slice?.primary?.expand_to_full_width ?? true,
      }"
    >
      <div :class="[layoutType, wrapperType]">
        <div v-for="(card, index) of cardDataArr" :key="index">
          <!-- Default variation - will adopt Card type settings for any style -->
          <PrismicCardRowDefault
            v-if="slice.variation === 'default'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <!-- Card Row 1 variation -->
          <PrismicCardRowOne
            v-if="slice.variation === 'cardRow1'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <!-- Card Row 2 variation -->
          <PrismicCardRowTwo
            v-if="slice.variation === 'cardRow2'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <!-- Card Row 3 variation -->
          <PrismicCardRowThree
            v-if="slice.variation === 'cardRow3'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <!-- Card Row 4 variation -->
          <PrismicCardRowFour
            v-if="slice.variation === 'cardRow4'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <!-- Card Row 5 variation -->
          <PrismicCardRowFive
            v-if="slice.variation === 'cardRow5'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <!-- Card Row 6 variation -->
          <PrismicCardRowSix
            v-if="slice.variation === 'cardRow6'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <PrismicCardRowSeven
            v-if="slice.variation === 'cardRow7'"
            :card="card"
            :cardRowSettings="cardRowSettings"
          />
          <PrismicCardRowEight
            v-if="slice.variation === 'cardRow8'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowNine
            v-if="slice.variation === 'cardRow9'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowTen
            v-if="slice.variation === 'cardRow10'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowEleven
            v-if="slice.variation === 'cardRow11'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowTwelve
            v-if="slice.variation === 'cardRow12'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowThirteen
            v-if="slice.variation === 'cardRow13'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowFourteen
            v-if="slice.variation === 'cardRow14'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <!-- TODO: Fifteen -->
          <PrismicCardRowSixteen
            v-if="slice.variation === 'cardRow16'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
          <PrismicCardRowSeventeen
            v-if="slice.variation === 'cardRow17'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />

          <PrismicCardRowEighteen
            v-if="slice.variation === 'cardRow18'"
            :card="card"
            :cardRowSettings="cardRowSettings"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>
