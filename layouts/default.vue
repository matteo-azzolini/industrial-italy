<template>
  <nav>
    <NuxtLink to="/">Map</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>

  <main>
    <slot name="default" />
  </main>
</template>

<style>
nav {
  background: black;
  color: white;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}

nav a {
  padding: 0.5rem 2rem;
}

main {
  height: calc(100% - 30px);
}
</style>
