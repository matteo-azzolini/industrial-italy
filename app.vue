<script lang="ts" setup>
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:2960685,blurFactor:0.4,gyroControls:!f,highlightColor:0,lowlightColor:1315860,midtoneColor:0,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:0,touchControls:!t,zoom:0.4)

// https://github.com/tengbao/vanta/issues/86

// https://stackoverflow.com/questions/76007542/react-typeerror-cannot-read-properties-of-null-reading-vanta

const vantaInstance = ref();

const vantaRef = ref();

// https://github.com/tengbao/vanta/blob/master/src/vanta.fog.js

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
  <DesktopNavbar class="hidden sm:flex" />

  <main ref="vantaRef">
    <NuxtPage />
  </main>

  <MobileNavbar class="flex sm:hidden" />
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --soft-black: #0F0F0F;
  /* --soft-black: #151515; */
}

html,
body,
#__nuxt {
  @apply bg-soft-black text-white;
  @apply h-full;

  font-size: 16px;
}

main {
  @apply h-full;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
