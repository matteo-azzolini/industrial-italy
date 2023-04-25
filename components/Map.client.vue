<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Location } from '~/data/locations';
import { locations } from '~/data/locations';

const emit = defineEmits(['selectLocation']);

// const MAP_TILE = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
// const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
const MAP_ATTRIBUTION = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

const {
  lat: routeLat,
  lng: routeLng,
  location,
} = useGetLocation();

const lat = routeLat || 43.3;
const lng = routeLng ? routeLng + 0.35 : 11.89;
const zoom = location !== undefined ? 11 : 7;

const container = ref<HTMLElement>();

onMounted(async () => {
  await nextTick();

  const map = new L.Map(container.value!, {
    center: new L.LatLng(lat, lng),
    zoom,
  });

  L.tileLayer(MAP_TILE, {
    attribution: MAP_ATTRIBUTION,
    maxZoom: 19,
    minZoom: 5,
  }).addTo(map);

  const icon = L.divIcon({
    className: 'my-custom-pin',
    iconAnchor: [-15, 5],
    html: '<span class="marker" />',
  });

  function addToMap(location: Location) {
    const marker = L.marker([location.lat, location.lng], { icon }).addTo(map);

    // TODO gestire click pagina aperta

    // marker.on('click', () => map.flyTo([location.lat, location.lng], 11));

    // if (route.path === `/${location.lat.toString()},${location.lng.toString()}`) {
    //   alert('ciao');
    // }

    marker.on('click', () => {
      emit('selectLocation');
      navigateTo({
        path: `/${location.lat.toString()},${location.lng.toString()}`,
      });
    });
  }

  Object.values(locations).forEach(addToMap);

  // TODO clean
  setTimeout(() => map.invalidateSize(true), 500);
  // map.invalidateSize(true);

  // https://stackoverflow.com/questions/73870844/nuxt-vue3-leaflet-window-is-not-defined

  // https://github.com/vue-leaflet/vue-leaflet
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

.marker {
  @apply w-6 h-6;
  @apply block relative;
  @apply -left-6 -top-6;

  @apply border border-white;
  @apply bg-slate-600;
  @apply hover:bg-slate-700;

  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
}
</style>