<template>
  <Hero />

  <SectionOne />

  <SectionTwo />

  <SectionThree />

  <SectionFour />

  <SectionFive />

  <SectionSix />

  <SectionSeven />

  <!-- <SectionEight /> -->

  <SectionNine />

  <SectionTen />

  <SectionEleven />

  <SectionTwelve />

  <SectionThirteen />

  <SectionFourteen />

  <SectionFifthteen />


  <div
    class="flex flex-col md:flex-row text-center md:text-left gap-5 items-center justify-between p-[10vmin] md:p-5 bg-white rounded-lg shadow-sm"
  >
    <div class="text-lg leading-snug max-w-xs md:max-w-none">
      <strong>Ready to give it a try?</strong> Start a trial completely free for
      14 days <span class="hidden lg:inline">and build your publication</span>
    </div>
    <div class="flex-shrink-0 flex gap-5">
      <a
        class="plausible-event-name=Signup-CTA-clicked inline-flex items-center justify-center text-md font-medium text-white px-5 py-4 rounded-md leading-none"
        href="https://account.ghost.org/signup/"
        >Test it out now</a
      >
      <a
        class="inline-flex items-center justify-center text-md font-medium bg-white text-black border border-base px-5 py-4 rounded-md leading-none"
        href="https://account.ghost.org/signin/"
        >Sign in</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import SectionOne from '~/components/demo-homepage-temp/SectionOne.vue';
import SectionTwo from '~/components/demo-homepage-temp/SectionTwo.vue';
import SectionThree from '~/components/demo-homepage-temp/SectionThree.vue';
import SectionFour from '~/components/demo-homepage-temp/SectionFour.vue';
import SectionFive from '~/components/demo-homepage-temp/SectionFive.vue';
import SectionSix from '~/components/demo-homepage-temp/SectionSix.vue';
import SectionSeven from '~/components/demo-homepage-temp/SectionSeven.vue';
import SectionEight from '~/components/demo-homepage-temp/SectionEight.vue';
import SectionNine from '~/components/demo-homepage-temp/SectionNine.vue';
import SectionTen from '~/components/demo-homepage-temp/SectionTen.vue';
import SectionEleven from '~/components/demo-homepage-temp/SectionEleven.vue';
import SectionTwelve from '~/components/demo-homepage-temp/SectionTwelve.vue';
import SectionThirteen from '~/components/demo-homepage-temp/SectionThirteen.vue';
import SectionFourteen from '~/components/demo-homepage-temp/SectionFourteen.vue';
import SectionFifthteen from '~/components/demo-homepage-temp/SectionFifthteen.vue';
</script>
