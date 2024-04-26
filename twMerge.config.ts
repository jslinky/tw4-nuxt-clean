import { extendTailwindMerge } from "tailwind-merge";
/// Hopefully won't need this in TW4 release

const spacing = [
  "spacing-3xs",
  "spacing-2xs",
  "spacing-xs",
  "spacing-sm",
  "spacing-md",
  "spacing-lg",
  "spacing-xl",
  "spacing-2xl",
  "spacing-3xl",
  "spacing-4xl",
  "spacing-5xl",
  "spacing-6xl",
  "spacing-rel-0_5",
  "spacing-rel-1",
  "spacing-rel-1_5",
  "spacing-rel-2",
  "spacing-rel-2_5",
  "spacing-rel-3",
  "spacing-rel-3_5",
  "spacing-rel-4",
  "spacing-rel-5",
  "spacing-rel-6",
  "spacing-rel-7",
  "spacing-rel-8",
  "spacing-rel-9",
  "spacing-rel-10",
  "spacing-rel-11",
  "spacing-rel-12",
  "spacing-rel-14",
  "spacing-rel-16",
  "spacing-rel-20",
  "spacing-rel-24",
  "spacing-gutter",
  "spacing-gutter-sm",
  "spacing-gutter-lg",
  "spacing-gutter-xl",
  "spacing-regions",
  "spacing-card",
];

const fontSizes = [
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "display-xs",
  "display-sm",
  "display-md",
  "display-lg",
  "display-xl",
  "display-2xl",
  "size-inherit",
];

const fontSizeClasses: string[] = fontSizes.map((entry) => `text-${entry}`);

const flowValues: string[] = [
  "flow-space-none",
  "flow-space-xs",
  "flow-space-sm",
  "flow-space-md",
  "flow-space-lg",
  "flow-space-xl",
  "flow-space-2xl",
  "flow-space-3xl",
  "flow-space-4xl",
  "flow-space-5xl",
  "flow-space-6xl",
];

const conflictingClassGroupModifiers = {
  spacing: spacing,
  fontSize: fontSizes,
};

export const twMerge = extendTailwindMerge({
//   theme: conflictingClassGroupModifiers,
  classGroups: {
    "flow-space": flowValues,
    text: fontSizeClasses,
  },
});
