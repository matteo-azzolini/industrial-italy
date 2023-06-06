<script lang="ts" setup>
const { isMobile } = useDevice();
const { location } = useGetLocation();

if (location === undefined)
  navigateTo('/');

useHead({
  titleTemplate: titleChunk => `${location!.name} - ${titleChunk}`,
});
</script>

<template>
  <Location :location="location!" />

  <Map v-if="!isMobile" />
</template>
