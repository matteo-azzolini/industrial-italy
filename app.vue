<template>
  <Navbar class="hidden sm:flex" />

  <main>
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
