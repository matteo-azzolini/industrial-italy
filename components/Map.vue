<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { locations, Location } from '~~/data/locations';

const MAP_TILE = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
// const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
// const MAP_TILE = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
const MAP_ATTRIBUTION =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>';

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

    marker.on('click', () => {
      navigateTo({
        path: `/${location.lat.toString()},${location.lng.toString()}`,
      });
    });
  }

  Object.values(locations).forEach(addToMap);

  // 45.440193,8.7850616
  // sarpom san martino NO
  // Via Vigevano, 43, 28069 San Martino NO
  // const marker1 = L.marker([45.440193, 8.7827656]).addTo(map);

  // marker1.on('click', () => {
  //   map.flyTo([45.440193, 8.7827656], 11);

  //   navigateTo({
  //     path: '/45.440193,8.7827656,11',
  //   });
  // });

  // ITELYUM landriano PV
  // const marker2 = L.marker([45.3078354, 9.2530549]).addTo(map);

  // marker2.on('click', () => {
  //   map.flyTo([45.3048723, 9.2484908], 11);
  // });

  // Villapana
  // Via Pana, 238/244, 48018 Faenza RA

  // const marker3 = L.marker([44.3358694, 11.8686717]).addTo(map);

  // marker3.on('click', () => {
  //   map.flyTo([44.3358694, 11.8686717], 11);
  // });

  // Ilva
  // Via Appia SS km 648, 74123 Taranto TA
  // const marker4 = L.marker([40.5031921, 17.2202768]).addTo(map);

  // marker4.on('click', () => map.flyTo([40.5031921, 17.2202768], 11));

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
