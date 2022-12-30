<template>
  <div class="panel">
    <img :src="'/ITELYUM.jpeg'" />
    <img :src="'/sarpom.jpg'" />

    <div class="mt-8">
      <h2>Sarpom</h2>
      <span class="block">Via Vigevano, 43, 28069 San Martino NO</span>

      <small>45.440193,8.7850616</small>
    </div>
  </div>
</template>

<style lang="postcss">
.panel {
  @apply absolute right-0 overflow-auto;
  @apply pt-20 px-4;
  @apply h-full;
  @apply bg-black;
  @apply shadow;
  max-height: 100%;
  /* @apply opacity-80; */
  z-index: 9998;

  img {
    @apply block mx-auto;
    @apply opacity-100;
    max-height: 100%;
    height: auto;
    width: auto;
    /* transform: translate(-51%, -51%); */
    /* z-index: 9999; */
  }
}
</style>
