<script setup lang="ts">
definePageMeta({
  pageTransition: false,
});
</script>

<template>
  <Location />

  <ClientOnly>
    <Map />
  </ClientOnly>
</template>
