import type { Location } from '~/data/locations';
import { locations } from '~/data/locations';
import { getLocationKey } from '~/utils/getLocationKey';

type GetLocation = {
  lat?: number
  lng?: number
  location?: Location
};

export default function (): GetLocation {
  const route = useRoute();

  const lat = +route.params.lat;
  const lng = +route.params.lng;

  const locationKey = getLocationKey({ lat, lng });

  const location = locations[locationKey];

  return {
    lat,
    lng,
    location,
  };
}
