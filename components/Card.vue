<script lang="ts" setup>

type ComponentStyles = {
  card: CssProp;
  caption: CssProp;
  tagline: CssProp;
  title: CssProp;
  subtitle: CssProp;
  picture: CssProp;
  body: CssProp;
  content: CssProp;
  footer: CssProp;
}

type ComponentPicture = {
  src: string;
  alt: string;
  css?: CssProp;
  linkUrl?: string;
};

type ComponentPropsStyles = Partial<ComponentStyles>;

type ComponentProps = {
  picture?: ComponentPicture;
  title?: string;
  tagline?: string;
  subtitle?: string;
  isStacked?: boolean;
  reverseOrder?: boolean;
  interact?: boolean;
  noClip?: boolean;
  css?: ComponentPropsStyles;
};

const {
  picture,
  title,
  tagline,
  subtitle,
  isStacked = false,
  reverseOrder = false,
  interact = false,
  noClip,  
  css
} = defineProps<ComponentProps>();

const {
  card: cardStyles,
  caption: captionStyles,
  tagline: taglineStyles,
  title: titleStyles,
  subtitle: subtitleStyles,
  picture: pictureStyles,
  body: bodyStyles,
  content: contentStyles,
  footer: footerStyles,
} = reactive({
  card: cn(["card", isStacked ? "card--stacked" : ""], css?.card),
  caption: cn("card-caption", css?.caption),
  tagline: cn("card-tagline", css?.tagline),
  title: cn("card-title", css?.title),
  subtitle: cn("card-subtitle", css?.subtitle),
  picture: cn("card-picture", css?.picture),
  body: cn("card-body", css?.body),
  content: cn("card-content", css?.content),
  footer: cn("card-footer", css?.footer),
}) as ComponentStyles;

const slots = useSlots();

</script>

<template>
  <article :class="cardStyles" :data-surface-interact="interact" :data-card-clip="noClip ? false : true">
    <template v-if="!reverseOrder">
      <div v-if="slots.picture || picture" :class="pictureStyles">
      <slot name="picture">
        <img
          v-if="picture"
          :src="picture.src"
          :alt="picture.alt"
          :css="picture.css"
        />
      </slot>
    </div>
    <div v-if="(slots.caption || tagline || subtitle || title)" :class="bodyStyles">
      <div :class="captionStyles">
        <slot name="caption" :css="{ title: titleStyles, tagline: taglineStyles, subtitle: subtitleStyles }">
          <p v-if="tagline" :class="taglineStyles">{{ tagline }}</p>
          <h3 :class="titleStyles">{{ title }}</h3>
          <p v-if="subtitle" :class="subtitleStyles">{{ subtitle }}</p>
        </slot>
      </div>

      <div v-if="slots.default" :class="contentStyles">
        <slot></slot>
      </div>
      <div v-if="slots.footer" :class="footerStyles">
        <slot name="footer"></slot>
      </div>
    </div>    
    </template>
    <template v-else>

    <div :class="bodyStyles">
      <div :class="captionStyles">
        <p v-if="tagline" :class="taglineStyles">{{ tagline }}</p>
        <h3 :class="titleStyles">{{ title }}</h3>
        <p v-if="subtitle" :class="subtitleStyles">{{ subtitle }}</p>
      </div>

      <div v-if="slots.default" :class="contentStyles">
        <slot></slot>
      </div>
      <div v-if="slots.footer" :class="footerStyles">
        <slot name="footer"></slot>
      </div>
    </div> 
    <div v-if="slots.picture || picture" :class="pictureStyles">
      <slot name="picture">
        <img
          v-if="picture"
          :src="picture.src"
          :alt="picture.alt"
          :css="picture.css"
        />
      </slot>
    </div>       
    </template>

  </article>
</template>
