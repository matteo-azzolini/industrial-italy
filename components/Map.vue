<script lang="ts" setup>
const map = ref();
onMounted(() => {
  new google.maps.Map(map, {
    mapId: "f76147fe78f212d5",
    center: { lat: 45.4053699, lng: 8.893036 },
    zoom: 11,
  })
});
// if (process.client) {
//   declare global {
//     interface Window {
//       initMap: () => void;
//     }
//   }

//   function initMap(): void {
//     new google.maps.Map(
//       document.getElementById("map") as HTMLElement,
//       {
//         mapId: "8e0a97af9386fef",
//         center: { lat: 48.85, lng: 2.35 },
//         zoom: 12,
//       } as google.maps.MapOptions
//     );
//   }


//   window.initMap = initMap;
// }
</script>

<template>
  <div id="map" ref="map">
  </div>
</template>

<style>
#map {
  height: 100%;
  width: 100%;
}
</style>