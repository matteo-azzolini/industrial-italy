<script lang="ts" setup>
const { location } = useGetLocation();

useHead({
  titleTemplate: titleChunk => `${location.name} - ${titleChunk}`,
});

const paneOpened = ref(true);

function togglePane() {
  paneOpened.value = true;
}
</script>

<template>
  <Location v-model="paneOpened" />

  <ClientOnly>
    <Map @select-location="togglePane" />
  </ClientOnly>
</template>
