export type GlobalFontConfigPropNames = "font-base" | "heading-font-family";

export type FontSettings<T extends string> = {
  fonts: {
    [K in T]: {
      name: string;
    };
  };
};

export type GlobalFontProps = FontSettings<GlobalFontConfigPropNames>;

export type FontListSystem =
  | "sans-system-ui"
  | "sans-humanist"
  | "sans-geometric-humanist"
  | "sans-classical-humanist"
  | "sans-neo-grotesque"
  | "sans-industrial"
  | "sans-rounded-sans"
  | "serif-transitional"
  | "serif-old-style"
  | "serif-slab-serif"
  | "serif-antique"
  | "serif-didone"
  | "monospace-slab-serif"
  | "monospace-code"
  | "cursive-handwritten";

export type FontName<T> = Record<"name", T>;

export type SystemFontNames = FontName<FontListSystem>;

export type SizeConfigKeys =
  | "text-size-increment"
  | "font-size-base-px"
  | "text-frame-ratio"
  | "text-frame-y"
  | "space-increment"
  | "unit-max"
  | "unit-fluid"
  | "radius";

export type SizeSettingsObj = {
    value: string;
    unit: string;
}  

export type SizeSettings<T extends string> = {
  [K in T]: SizeSettingsObj;
};

export type SizeProps = SizeSettings<SizeConfigKeys>;

export type SitePropSettings = GlobalFontProps & {
    size: SizeProps
};
