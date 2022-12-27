<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// const MAP_TILE = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";
const MAP_TILE =
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
// const MAP_TILE = "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
const MAP_ATTRIBUTION =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

const container = ref<HTMLElement>();

onMounted(() => {
  const map = new L.Map(container.value!, {
    center: new L.LatLng(45.4, 9.89),
    zoom: 8,
  });

  L.tileLayer(MAP_TILE, {
    attribution: MAP_ATTRIBUTION,
    maxZoom: 19,
  }).addTo(map);

  const marker = L.marker([45.440193, 8.7827656]).addTo(map);

  marker.on('click', () => map.flyTo([45.440193, 8.7827656], 11));

  // function navigate(){
  //   return navigateTo({
  //     path: '/search',
  //     query: {
  //       name: name.value,
  //       type: type.value
  //     }
  //   })
  // }
});
</script>

<template>
  <div ref="container" class="w-full h-full" />
</template>

<style lang="postcss">
.leaflet-control-attribution {
  background-color: black !important;
  opacity: 50%;
}

.leaflet-control-attribution a {
  color: white !important;
}
</style>
