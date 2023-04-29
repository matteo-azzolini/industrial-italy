<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => `About - ${titleChunk}`,
});

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
});
</script>

<template>
  <div
    class="prose prose-invert pt-20 pb-20 sm:max-w-2xl max-w-5xl
      mx-auto px-6 md:px-0"
  >
    <h1>Industrial italy</h1>

    <p>
      As a night owl I enjoy staying up till late night.
    </p>
    <p>
      I appreciate the quiet at night and I find it reconciles my thinking.
    </p>
    <p>
      From time to time I like to take a ride and explore the area and I have always been
      been fascinated by the industrial structures.
      Maybe it's the lights
    </p>
    <p>
      maybe it's the fumes, maybe it's because it's the only activity
      production that takes place at that hour..
      As fascinating as they are frightening.
      With this site I want to point out some destinations that may be
      useful for other night owl explorers as my self.
    </p>

    <!-- <p>
      Apprezzo la quiete che c'è di notte, trovo che concilia il mio pensiero.
      Ogni tanto mi piace take a ride ed esplorare la zona e son semper
      stato affascinato dalle strutture industriali.
      Sarà per le luci, sarà per fumi, sarà perchè è l'unica attività
      produttiva che avviene a quell'ora..
      Tanto affascinanti quanto spaventose.
      Con questo sito ho voglio segnalare alcune mete che possono essere
      utili per altri night owl explorer as my self.
    </p> -->

    <!-- <Icon name="mdi:github" class="text-gray-400 group-hover:text-white" /> https://github.com/matteo-azzolini/industrial-italy -->

    <NuxtLink
      to="https://github.com/matteo-azzolini/industrial-italy"
      class="group flex items-center space-x-2"
      target="_blank"
    >
      <Icon
        name="mdi:github"
        class="h-6 w-6"
      />

      <span class="block">Source code</span>
    </NuxtLink>
  </div>
</template>
