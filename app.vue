<template>
  <Navbar />

  <main>
    <NuxtPage />
  </main>
</template>

<style lang="postcss">
html,
body,
#__nuxt {
  @apply bg-black text-white;

  height: 100%;
  margin: 0;
}

main {
  /* height: calc(100% - 50px); */
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
