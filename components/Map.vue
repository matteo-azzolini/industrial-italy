<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Location } from '~/data/locations';
import { locations } from '~/data/locations';

const emit = defineEmits(['selectLocation']);

const showLogo = ref(false);

function togglelogo() {
  showLogo.value = !showLogo.value;
}

// const MAP_TILE = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
// const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
const MAP_ATTRIBUTION = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

const {
  lat: routeLat,
  lng: routeLng,
  location,
} = useGetLocation();

const { isMobile } = useDevice();

const lat = 44.544713;
const lng = 10.8030309;
const zoom = 5;

const container = ref<HTMLElement>();

onMounted(() => {
  const map = new L.Map(container.value!, {
    center: new L.LatLng(lat, lng),
    zoom,
    zoomSnap: 0.25,
    zoomDelta: 1,
  });

  L.tileLayer(MAP_TILE, {
    // attribution: MAsP_ATTRIBUTION,
    maxZoom: 19,
    minZoom: 3,
  }).addTo(map);

  const period = 3000;

  function step(zoom: number, duration: number) {
    map.flyTo([lat, lng], zoom, {
      animate: true,
      duration,
      easeLinearity: 1,
    // noMoveStart: true,
    });
  }

  // function showLogo() {
  //   console.log('ciao');
  // }

  setTimeout(() => step(8, 1), 1000);
  // setTimeout(() => step(10), 3000);
  setTimeout(() => step(14, 2), 3000);

  setTimeout(() => {
    showLogo.value = true;
  }, 5000);

  const icon = L.icon({
    iconUrl: 'marker-icon.png',
    iconAnchor: [10, 40],
  });

  function addToMap(location: Location) {
    const marker = L.marker([location.lat, location.lng], {
      icon,
    }).addTo(map);
  }

  Object.values(locations).forEach(addToMap);

  // TODO clean
  // setTimeout(() => map.invalidateSize(true), 500);
  // map.invalidateSize(true);

  // https://stackoverflow.com/questions/73870844/nuxt-vue3-leaflet-window-is-not-defined

  // https://github.com/vue-leaflet/vue-leaflet
});
</script>

<template>
  <button class="asd absolute bg-white top-0 right-0 z-50" @click="togglelogo()">
    CLICK
  </button>

  <div class="asd2 w-full h-full bg-transparent absolute">
    <Transition name="slide">
      <img v-if="showLogo" id="logo" src="/photo_2023-03-31_19-56-35.jpg">
    </Transition>
  </div>

  <div ref="container" class="w-full h-full" />
</template>

<style lang="postcss">
.leaflet-control-zoom {
  margin-top: 50px !important;
  display: hidden;
}

.leaflet-control-attribution {
  background-color: black !important;
  opacity: 50%;
  display: hidden;
}

.leaflet-control-attribution a {
  color: white !important;
  display: hidden;
}

#logo {
  @apply absolute opacity-60;
  height: 450px;
  width: 450px;
  top: 8em;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 9999;
}

.slide-enter-active {
  transition: all 3s;
  transition-timing-function: cubic-bezier(0,1.23,.67,.84)
}

.slide-enter-from {
  @apply translate-y-8 opacity-0;
}

.asd {
  z-index: 9999;
}

.asd2 {
  z-index: 9998;
}
</style>
