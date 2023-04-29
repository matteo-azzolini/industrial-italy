<template>
  <nav class="mobile-nav">
    <!--
      TODO workaround
      <a> over nuxt link to reload position
      ref https://github.com/nuxt/nuxt/issues/7369#issuecomment-898604704
    -->
    <NuxtLink to="/">
      <Icon
        name="humbleicons:location"
        size="1.5em"
      />
      Map
    </NuxtLink>
    <NuxtLink to="/about">
      <Icon
        name="humbleicons:info-circle"
        size="1.5em"
      />
      About
    </NuxtLink>
  </nav>
</template>

<style lang="postcss">
/* TODO Scoped */
.mobile-nav {
  @apply absolute bottom-0;
  /* @apply block; */
  @apply w-full;
  @apply flex justify-around items-center;
  @apply px-10;
  z-index: 9999;
  @apply border-t border-gray-900;

  @apply bg-gray-900;
  /* @apply bg-red-500; */
  /* @apply bg-soft-black; */
  /* @apply bg-blue-400; */

  a {
    @apply flex flex-col items-center justify-normal;
    @apply pt-2 pb-3 px-6;
    @apply text-xs text-gray-500;

    svg {
      @apply text-gray-400;
    }

    &.router-link-active {
      @apply text-gray-300;

      svg {
        /* @apply text-gray-100; */
        @apply text-white;
      }
    }
  }
}

nav {
  background: linear-gradient(#000, #0F0F0F00 90%);
}
</style>
