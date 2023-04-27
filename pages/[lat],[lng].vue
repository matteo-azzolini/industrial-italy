<script lang="ts" setup>
const { location } = useGetLocation();

useHead({
  titleTemplate: titleChunk => `${location.name} - ${titleChunk}`,
});
</script>

<template>
  <Location />

  <Map />
</template>
