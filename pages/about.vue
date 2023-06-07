<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => `About - ${titleChunk}`,
});

// definePageMeta({
//   pageTransition: {
//     name: 'page',
//     mode: 'out-in',
//   },
// });
</script>

<template>
  <div
    class="prose prose-invert pt-10 sm:pt-24 pb-20 max-w-5xl sm:max-w-2xl xl:max-w-4xl
      mx-auto px-6 md:px-0"
  >
    <h1>Industrial italy</h1>

    <p>
      As a night owl, I've always enjoyed staying up late at night.
      <br>
      I appreciate the quietness at the end of the day; I find it soothing for my thoughts.
    </p>
    <p>
      From time to time, I like to take a ride and explore the area where I live and I've always been fascinated by the industrial structures.
    </p>
    <p>
      Maybe it's the lights, maybe it's the fumes, or maybe it's because it's the only production activity that takes place at that hour...
      fascinating and frightening at the same time.
    </p>
    <p>
      With this project, I want to highlight some destinations and help other night owls like myself.
    </p>

    <NuxtLink
      to="https://github.com/matteo-azzolini/industrial-italy"
      class="w-fit flex items-center space-x-2"
      target="_blank"
    >
      <Icon
        name="mdi:github"
        class="h-6 w-6"
      />

      <span class="block">Source code</span>
    </NuxtLink>

    <span class="mt-20 block text-sm text-center">Made with 🤍 by Matteo Azzolini</span>
  </div>
</template>

<style lang="postcss" scoped>
@media (min-width: 1280px) {
  div {
    font-size: 18px;
  }
}
</style>
