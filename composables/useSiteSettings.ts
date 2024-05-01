import globalFontProps from "~/data/config/global-font-props";
import sizeProps from "~/data/config/size-props";
import colorProps from "~/data/config/color-props";
import type { SitePropSettings } from "~/types";

export const useSiteSettings = () => {
  return useState("design-tokens", () => ({
    ...globalFontProps,
    size: {
      ...sizeProps,
    },
    color: {
      ...colorProps
    }
  }));
};
