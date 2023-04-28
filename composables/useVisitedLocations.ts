import { useStorage } from '@vueuse/core';

type UseVisitedLocations = {
  add: (locationKey: string) => void
  isVisited: (locationKey: string) => boolean
};

const visitedLocations = useStorage<string[]>('industrial-italy.visited', []);

export default function (): UseVisitedLocations {
  function add(locationKey: string) {
    visitedLocations.value.push(locationKey);
  }

  function isVisited(locationKey: string) {
    return visitedLocations.value.includes(locationKey);
  }

  return {
    add,
    isVisited,
  };
}
