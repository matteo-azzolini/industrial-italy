<script lang="ts" setup>
import type { Location } from '~/data/locations';

defineProps<{
  location: Location
}>();
</script>

<template>
  <Transition name="slide" appear>
    <div class="panel border-l border-gray-900">
      <NuxtLink to="/">
        <Icon
          name="carbon-close"
          size="4em"
          class="absolute top-2 md:top-8 cursor-pointer text-gray-300 hover:text-white"
        />
      </NuxtLink>

      <img :src="location.img">

      <div class="mt-8 mx-8 space-y-2">
        <h2 class="text-2xl font-semibold">
          {{ location.name }}
        </h2>

        <NuxtLink
          :to="location.link"
          class="block w-fit underline font-medium"
          target="_blank"
        >
          {{ location.address }}
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<style lang="postcss">
.panel {
  @apply absolute right-0 overflow-auto;
  @apply h-full w-full md:w-3/4 lg:w-2/3 xl:w-1/2;
  @apply bg-soft-black;
  @apply shadow;
  max-height: 100%;
  z-index: 9998;
  filter: drop-shadow(0 -6mm 4mm rgb(0, 0, 0));

  img {
    @apply w-full;
    @apply block mx-auto;
    max-height: 100%;
    height: auto;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  @apply -translate-x-2 opacity-0;
}

.slide-leave-to {
  @apply -translate-x-2 opacity-0;
}
</style>
