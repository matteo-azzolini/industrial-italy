<template>
  <nav>
    <NuxtLink to="/">
      Map
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/page2">
      Page 2
    </NuxtLink>
  </nav>
</template>

<style lang="postcss">
nav {
  @apply absolute;
  @apply w-full;
  @apply flex justify-end;
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
