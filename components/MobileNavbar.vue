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
  @apply fixed bottom-0;
  @apply w-full;
  @apply justify-around items-center;
  @apply px-10;
  z-index: 9999;
  @apply border-t border-gray-800;

  @apply bg-soft-black;

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
        @apply text-white;
      }
    }
  }
}
</style>
