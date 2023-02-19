<template>
  <Navbar />

  <main>
    <NuxtPage />
  </main>
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

  height: 100%;
  margin: 0;

  font-size: 16px;
}

main {
  /* height: calc(100% - 50px); */
  /* TODO overflow dovuto all'animazione */
  @apply h-full overflow-hidden;
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
