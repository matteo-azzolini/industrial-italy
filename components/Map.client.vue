<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Location } from '~/data/locations';
import { locations } from '~/data/locations';
import marker from '~/assets/marker.svg?raw';

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

const visitedLocations = useVisitedLocations();

onMounted(async () => {
  await nextTick();

  const center = location !== undefined ? new L.LatLng(lat, lng) : undefined;

  const map = new L.Map(container.value!, {
    center,
    zoom,
    zoomSnap: 0.25,
  });

  L.tileLayer(MAP_TILE, {
    attribution: MAP_ATTRIBUTION,
    maxZoom: 19,
    minZoom: 5,
  }).addTo(map);

  const iconUnvisited = L.divIcon({
    className: 'marker-unvisited',
    iconAnchor: [14, 15],
    html: marker,
  });

  const iconVisited = L.divIcon({
    className: 'marker-visited',
    iconAnchor: [14, 15],
    html: marker,
  });

  function addToMap(location: Location) {
    const locationKey = getLocationKey(location);

    const isVisited = visitedLocations.isVisited(locationKey);

    const icon = isVisited ? iconVisited : iconUnvisited;

    const marker = L.marker([location.lat, location.lng], { icon }).addTo(map);

    marker.bindPopup(`<img src="${location.img}" />`);

    marker.on('mouseover', () => {
      marker.openPopup();
    });

    marker.on('mouseout', () => {
      marker.closePopup();
    });

    marker.on('click', () => {
      visitedLocations.add(locationKey);

      navigateTo({ path: `/${locationKey}` });
    });
  }

  if (!location) {
    const { isMobile } = useDevice();

    if (isMobile)
      map.fitBounds([[46.440193, 7.7850616], [36.5031921, 17.986]]);

    else
      map.fitBounds([[46.440193, 7.7850616], [39.5031921, 17.986]]);
  }

  Object.values(locations).forEach(addToMap);
});
</script>

<template>
  <div ref="container" class="w-full h-full" />
</template>

<style lang="postcss">
.leaflet-control-zoom {
  @apply mt-6 sm:mt-12 !important;

  a {
    @apply bg-gray-800 hover:bg-gray-700;
    @apply text-gray-300;

    &:first-child {
      @apply border-gray-700;
    }

    &.leaflet-disabled {
      @apply bg-gray-600;
    }
  }
}

.leaflet-control-attribution {
  background-color: black !important;
  opacity: 50%;
}

.leaflet-control-attribution a {
  color: white !important;
}

.marker {
  @apply hover:text-white;
}

.marker-unvisited {
  @apply marker text-emerald-400;
}

.marker-visited {
  @apply marker text-purple-400;
}

.leaflet-popup {
  .leaflet-popup-content {
    @apply m-0;
    width: 250px;
    @apply overflow-hidden;

    img {
      border-radius: 12px;
    }
  }

  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    @apply bg-gray-800;
  }

  .leaflet-popup-close-button {
    @apply invisible;
  }
}
</style>
