import type { Location } from '~/data/locations';

type Coordinates = {
  lat: number
  lng: number
};

export const getLocationKey = ({ lat, lng }: Location | Coordinates): string => `${lat},${lng}`;
