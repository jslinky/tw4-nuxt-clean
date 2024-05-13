// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type FeatureComponentLibraryDocumentDataSlicesSlice = FeatureSlice;

/**
 * Content for Feature Component Library documents
 */
interface FeatureComponentLibraryDocumentData {
  /**
   * Title field in *Feature Component Library*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_component_library.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Feature Component Library*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_component_library.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FeatureComponentLibraryDocumentDataSlicesSlice> /**
   * Meta Description field in *Feature Component Library*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: feature_component_library.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Feature Component Library*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_component_library.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Feature Component Library*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: feature_component_library.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Feature Component Library document from Prismic
 *
 * - **API ID**: `feature_component_library`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FeatureComponentLibraryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<FeatureComponentLibraryDocumentData>,
    "feature_component_library",
    Lang
  >;

type HeroComponentLibraryDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Hero Component Library documents
 */
interface HeroComponentLibraryDocumentData {
  /**
   * Title field in *Hero Component Library*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_component_library.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Hero Component Library*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_component_library.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeroComponentLibraryDocumentDataSlicesSlice> /**
   * Meta Description field in *Hero Component Library*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: hero_component_library.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Hero Component Library*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_component_library.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Hero Component Library*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: hero_component_library.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Hero Component Library document from Prismic
 *
 * - **API ID**: `hero_component_library`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeroComponentLibraryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HeroComponentLibraryDocumentData>,
    "hero_component_library",
    Lang
  >;

type PageDocumentDataSlicesSlice = HeadingSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FeatureComponentLibraryDocument
  | HeroComponentLibraryDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *Feature → Default → Primary*
 */
export interface FeatureSliceDefaultPrimary {
  /**
   * Image field in *Feature → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Tagline field in *Feature → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tagline: prismic.RichTextField;

  /**
   * Title field in *Feature → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Title Type field in *Feature → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.title_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  title_type: prismic.SelectField<"2xl" | "xl">;

  /**
   * Sub Title field in *Feature → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.sub_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_title: prismic.RichTextField;

  /**
   * Sub Title Size field in *Feature → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.sub_title_size
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  sub_title_size: prismic.SelectField<"sm" | "md" | "lg" | "xl">;

  /**
   * Content field in *Feature → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Footer field in *Feature → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.default.primary.footer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  footer: prismic.RichTextField;
}

/**
 * Primary content in *Feature → Items*
 */
export interface FeatureSliceDefaultItem {
  /**
   * Button Link field in *Feature → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Text field in *Feature → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Style field in *Feature → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].button_style
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  button_style: prismic.SelectField<
    | "default"
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "link"
    | "outline-default"
    | "outline-neutral"
    | "outline-primary"
    | "outline-secondary"
    | "outline-accent"
  >;
}

/**
 * Default variation for Feature Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeatureSliceDefaultPrimary>,
  Simplify<FeatureSliceDefaultItem>
>;

/**
 * Slice variation for *Feature*
 */
type FeatureSliceVariation = FeatureSliceDefault;

/**
 * Feature Shared Slice
 *
 * - **API ID**: `feature`
 * - **Description**: Feature
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSlice = prismic.SharedSlice<
  "feature",
  FeatureSliceVariation
>;

/**
 * Primary content in *Heading → Default → Primary*
 */
export interface HeadingSliceDefaultPrimary {
  /**
   * Heading field in *Heading → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading Type field in *Heading → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: xxs
   * - **API ID Path**: heading.default.primary.heading_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  heading_type: prismic.SelectField<
    "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl",
    "filled"
  >;
}

/**
 * Default variation for Heading Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Heading*
 */
type HeadingSliceVariation = HeadingSliceDefault;

/**
 * Heading Shared Slice
 *
 * - **API ID**: `heading`
 * - **Description**: Heading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSlice = prismic.SharedSlice<
  "heading",
  HeadingSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Crafting Digital Brilliance
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading Type field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Choose heading type
   * - **Default Value**: 2xl
   * - **API ID Path**: hero.default.primary.heading_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  heading_type: prismic.SelectField<
    "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs",
    "filled"
  >;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Surface Background field in *Hero → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.surface_background
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  surface_background: prismic.SelectField<
    | "light"
    | "dark"
    | "eggshell"
    | "primary"
    | "primary-light"
    | "primary-dark"
    | "secondary"
    | "secondary-light"
    | "secondary-dark"
    | "accent"
    | "accent-light"
    | "accent-dark"
  >;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Reversed → Primary*
 */
export interface HeroSliceDefaultReversedPrimary {
  /**
   * Heading field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Crafting Digital Brilliance
   * - **API ID Path**: hero.defaultReversed.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading Type field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2xl
   * - **API ID Path**: hero.defaultReversed.primary.heading_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  heading_type: prismic.SelectField<
    "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs",
    "filled"
  >;

  /**
   * Body field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.defaultReversed.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.defaultReversed.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.defaultReversed.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.defaultReversed.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Surface Background field in *Hero → Reversed → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.defaultReversed.primary.surface_background
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  surface_background: prismic.SelectField<
    | "light"
    | "dark"
    | "eggshell"
    | "primary"
    | "primary-light"
    | "primary-dark"
    | "secondary"
    | "secondary-light"
    | "secondary-dark"
    | "accent"
    | "accent-light"
    | "accent-dark"
  >;
}

/**
 * Reversed variation for Hero Slice
 *
 * - **API ID**: `defaultReversed`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefaultReversed = prismic.SharedSliceVariation<
  "defaultReversed",
  Simplify<HeroSliceDefaultReversedPrimary>,
  never
>;

/**
 * Primary content in *Hero → Hero2 → Primary*
 */
export interface HeroSliceHero2Primary {
  /**
   * Heading field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Crafting Digital Brilliance
   * - **API ID Path**: hero.hero2.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading Type field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Choose heading type
   * - **Default Value**: 2xl
   * - **API ID Path**: hero.hero2.primary.heading_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  heading_type: prismic.SelectField<
    "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs",
    "filled"
  >;

  /**
   * Body field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero2.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero2.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero2.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Image2 field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero2.primary.image2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2: prismic.ImageField<never>;

  /**
   * Surface Background field in *Hero → Hero2 → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero2.primary.surface_background
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  surface_background: prismic.SelectField<
    | "light"
    | "dark"
    | "eggshell"
    | "primary"
    | "primary-light"
    | "primary-dark"
    | "secondary"
    | "secondary-light"
    | "secondary-dark"
    | "accent"
    | "accent-light"
    | "accent-dark"
  >;
}

/**
 * Hero2 variation for Hero Slice
 *
 * - **API ID**: `hero2`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHero2 = prismic.SharedSliceVariation<
  "hero2",
  Simplify<HeroSliceHero2Primary>,
  never
>;

/**
 * Primary content in *Hero → Hero3 → Primary*
 */
export interface HeroSliceHero3Primary {
  /**
   * Heading field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Crafting Digital Brilliance
   * - **API ID Path**: hero.hero3.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading Type field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Choose heading type
   * - **Default Value**: 2xl
   * - **API ID Path**: hero.hero3.primary.heading_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  heading_type: prismic.SelectField<
    "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs",
    "filled"
  >;

  /**
   * Body field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero3.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero3.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero3.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero3.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Surface Background field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero3.primary.surface_background
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  surface_background: prismic.SelectField<
    | "light"
    | "dark"
    | "eggshell"
    | "primary"
    | "primary-light"
    | "primary-dark"
    | "secondary"
    | "secondary-light"
    | "secondary-dark"
    | "accent"
    | "accent-light"
    | "accent-dark"
  >;

  /**
   * Add Backdrop field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hero.hero3.primary.add_backdrop
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  add_backdrop: prismic.BooleanField;

  /**
   * Backdrop Opacity field in *Hero → Hero3 → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero3.primary.backdrop_opacity
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  backdrop_opacity: prismic.NumberField;
}

/**
 * Hero3 variation for Hero Slice
 *
 * - **API ID**: `hero3`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHero3 = prismic.SharedSliceVariation<
  "hero3",
  Simplify<HeroSliceHero3Primary>,
  never
>;

/**
 * Primary content in *Hero → Hero 4 → Primary*
 */
export interface HeroSliceHero4Primary {
  /**
   * Heading field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Crafting Digital Brilliance
   * - **API ID Path**: hero.hero4.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Heading Type field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Choose heading type
   * - **Default Value**: 2xl
   * - **API ID Path**: hero.hero4.primary.heading_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  heading_type: prismic.SelectField<
    "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs",
    "filled"
  >;

  /**
   * Body field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero4.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button Text field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero4.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero4.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Image field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero4.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Surface Background field in *Hero → Hero 4 → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.hero4.primary.surface_background
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  surface_background: prismic.SelectField<
    | "light"
    | "dark"
    | "eggshell"
    | "primary"
    | "primary-light"
    | "primary-dark"
    | "secondary"
    | "secondary-light"
    | "secondary-dark"
    | "accent"
    | "accent-light"
    | "accent-dark"
  >;
}

/**
 * Hero 4 variation for Hero Slice
 *
 * - **API ID**: `hero4`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHero4 = prismic.SharedSliceVariation<
  "hero4",
  Simplify<HeroSliceHero4Primary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation =
  | HeroSliceDefault
  | HeroSliceDefaultReversed
  | HeroSliceHero2
  | HeroSliceHero3
  | HeroSliceHero4;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FeatureComponentLibraryDocument,
      FeatureComponentLibraryDocumentData,
      FeatureComponentLibraryDocumentDataSlicesSlice,
      HeroComponentLibraryDocument,
      HeroComponentLibraryDocumentData,
      HeroComponentLibraryDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      FeatureSlice,
      FeatureSliceDefaultPrimary,
      FeatureSliceDefaultItem,
      FeatureSliceVariation,
      FeatureSliceDefault,
      HeadingSlice,
      HeadingSliceDefaultPrimary,
      HeadingSliceVariation,
      HeadingSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultReversedPrimary,
      HeroSliceHero2Primary,
      HeroSliceHero3Primary,
      HeroSliceHero4Primary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceDefaultReversed,
      HeroSliceHero2,
      HeroSliceHero3,
      HeroSliceHero4,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}