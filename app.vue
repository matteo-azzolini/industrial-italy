<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// const map = ref();
onMounted(() => {
  const map = new L.Map(
    // 'map',
    document.getElementById('map') as HTMLElement,
    {
      center: new L.LatLng(45.4, 9.89),
      zoom: 8,
    }
  );

  L.tileLayer(
    // 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?',
    // 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
    {
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 19,
    }
  ).addTo(map);

  const marker = L.marker([45.440193, 8.7827656]).addTo(map);

  marker.on('click', () => map.flyTo([45.440193, 8.7827656], 11));
});
</script>

<template>
  <div id="map" ref="map" />
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
  margin: 0;
}

#map {
  height: 100%;
  width: 100vw;
}

.leaflet-control-attribution {
  background-color: black !important;
  opacity: 50%;
}

.leaflet-control-attribution a {
  color: white !important;
}
</style>
