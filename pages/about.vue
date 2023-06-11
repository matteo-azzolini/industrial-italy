<script setup lang="ts">
// definePageMeta({
//   pageTransition: {
//     name: 'page',
//     mode: 'out-in',
//   },
// });
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

useHead({
  titleTemplate: titleChunk => `About - ${titleChunk}`,
});

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:2960685,blurFactor:0.4,gyroControls:!f,highlightColor:0,lowlightColor:1315860,midtoneColor:0,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:0,touchControls:!t,zoom:0.4)

const vantaInstance = ref();

const vantaRef = ref();

onMounted(() => {
  vantaInstance.value = FOG({
    el: vantaRef.value,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x0,
    midtoneColor: 0x0,
    // lowlightColor: 0x141414,
    // lowlightColor: 0xAAAA7E,
    // lowlightColor: '#a3a3a3',
    // lowlightColor: '#d4d4d4',
    lowlightColor: '#e5e5e5',
    // baseColor: 0x2D2D2D,
    baseColor: '#0d0d0d',
    // baseColor: '#0F0F0F',
    blurFactor: 0.40,
    speed: 0.4,
    zoom: 0.40,
    THREE,
  });
});

onUnmounted(() => {
  vantaInstance.value.destroy();
});
</script>

<template>
  <div
    ref="vantaRef"
    class="h-full"
  >
    <div
      class="prose prose-invert pt-10 sm:pt-24 pb-20 max-w-5xl sm:max-w-2xl xl:max-w-3xl
      mx-auto px-6 md:px-0
      z-10 relative"
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

      <span class="mt-20 block text-xs text-center">Made with 🤍 by Matteo Azzolini</span>
    </div>
  </div>
</template>
