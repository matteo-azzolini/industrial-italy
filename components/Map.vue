<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Location } from '~/data/locations';
import { locations } from '~/data/locations';

// const MAP_TILE = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
// const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
const MAP_ATTRIBUTION = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

const route = useRoute();

const lat = +route.params.lat || 43.3;
const lng = +route.params.lng + 0.35 || 11.89;
const zoom = route.params.lat ? 11 : 7;

const container = ref<HTMLElement>();

onMounted(() => {
  const map = new L.Map(container.value!, {
    center: new L.LatLng(lat, lng),
    zoom,
  });

  L.tileLayer(MAP_TILE, {
    attribution: MAP_ATTRIBUTION,
    maxZoom: 19,
  }).addTo(map);

  function addToMap(location: Location) {
    const marker = L.marker([location.lat, location.lng]).addTo(map);

    // map.flyTo([44.3358694, 11.8686717], 11);

    marker.on('click', () => navigateTo({
      path: `/${location.lat.toString()},${location.lng.toString()}`,
    }));
  }

  Object.values(locations).forEach(addToMap);
});
</script>

<template>
  <div ref="container" class="w-full h-full" />
</template>

<style lang="postcss">
.leaflet-control-zoom {
  margin-top: 50px !important;
}

.leaflet-control-attribution {
  background-color: black !important;
  opacity: 50%;
}

.leaflet-control-attribution a {
  color: white !important;
}
</style>
