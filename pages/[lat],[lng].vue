<script lang="ts" setup>
const { isMobile } = useDevice();
const { location } = useGetLocation();

useHead({
  titleTemplate: titleChunk => `${location.name} - ${titleChunk}`,
});
</script>

<template>
  <Location />

  <Map v-if="!isMobile" />
</template>
