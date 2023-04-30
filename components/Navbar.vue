<template>
  <nav class="desktop-nav">
    <!--
      TODO workaround
      <a> over nuxt link to reload position
      ref https://github.com/nuxt/nuxt/issues/7369#issuecomment-898604704
    -->
    <a href="/">
      Map
    </a>
    <NuxtLink to="/about">
      About
    </NuxtLink>
  </nav>
</template>

<style lang="postcss">
/* TODO scoped */
.desktop-nav {
  @apply absolute;
  @apply w-full;
  @apply justify-end;
  @apply px-10;
  height: 50px;
  z-index: 9999;

  background: linear-gradient(#000, #0F0F0F00 90%);

  a {
    @apply py-2 px-6;
    @apply text-xl text-white;
  }
}
</style>
