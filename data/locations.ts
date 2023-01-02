export type Location = {
  name: string;
  lat: number;
  lng: number;
  img: string;
  address: string;
  link: string;
};

export const locations: Record<string, Location> = {
  '45.440193,8.7850616': {
    name: 'Sarpom',
    lat: 45.440193,
    lng: 8.7850616,
    img: '/sarpom.jpg',
    address: 'Via Vigevano, 43, 28069 San Martino NO',
    link: 'https://goo.gl/maps/hhPBDA4Th1kaQmFKA',
  },
  '45.3078354,9.2530549': {
    name: 'Itelyum',
    lat: 45.3078354,
    lng: 9.2530549,
    img: '/5:4cold.jpeg',
    address: 'Via Stanislao Intini, 2, 27015 Landriano PV',
    link: 'https://goo.gl/maps/Mr3xxPDRLwASDCS89',
  },
  // 44.3358694, 11.8686717
  // Villapana
  // Via Pana, 238/244, 48018 Faenza RA

  // 40.5031921, 17.2202768
  // Ilva
  // Via Appia SS km 648, 74123 Taranto TA
};
