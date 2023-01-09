<script lang="ts" setup>
const { location } = useGetLocation();

const paneOpen = ref(true);
</script>

<template>
  <Transition name="slide" appear>
    <div v-if="paneOpen" class="panel border-l border-gray-900">
      <Icon
        name="carbon-close"
        size="4em"
        class="absolute top-10 cursor-pointer text-gray-300 hover:text-white"
        @click="paneOpen = false"
      />

      <img :src="location.img">

      <div class="mt-8 mx-8 space-y-2">
        <h2 class="text-2xl font-semibold">
          {{ location.name }}
        </h2>

        <NuxtLink
          :to="location.link"
          class="group flex items-center space-x-2"
          target="_blank"
        >
          <span class="block group-hover:underline ">{{ location.address }}</span>
          <Icon name="humbleicons:external-link" class="text-gray-400 group-hover:text-white" />
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<style lang="postcss">
.panel {
  @apply absolute right-0 overflow-auto;
  /* @apply pt-20 px-4; */
  @apply h-full w-1/2;
  @apply bg-black;
  @apply shadow;
  max-height: 100%;
  /* @apply opacity-80; */
  z-index: 9998;

  img {
    @apply block mx-auto;
    /* @apply opacity-100; */
    max-height: 100%;
    height: auto;
    width: auto;
    /* transform: translate(-51%, -51%); */
    /* z-index: 9999; */
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
