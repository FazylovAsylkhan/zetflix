/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import img1 from '../images/previewMovies/1.jpg';
import img2 from '../images/previewMovies/2.jpg';
import img3 from '../images/previewMovies/3.jpg';
import img4 from '../images/previewMovies/4.jpg';
import img5 from '../images/previewMovies/5.jpg';
import img6 from '../images/previewMovies/6.jpg';

export const cards = [
  {
    title: 'Pulp Fiction',
    subtitle: 'Action & Adventure',
    date: '2004',
    image: img1,
    id: 1,
  },
  {
    title: 'Bohemian Rhapsody',
    subtitle: 'Drama, Biography, Music',
    date: '2003',
    image: img2,
    id: 2,
  },
  {
    title: 'Kill Bill: Vol 2',
    subtitle: 'Oscar winning Movie',
    date: '1994',
    image: img3,
    id: 3,
  },
  {
    title: 'Avengers: War of Infinity',
    subtitle: 'Action & Adventure',
    date: '2004',
    image: img4,
    id: 4,
  },
  {
    title: 'Inception',
    subtitle: 'Action & Adventure',
    date: '2003',
    image: img5,
    id: 5,
  },
  {
    title: 'Reservoir dogs',
    subtitle: 'Oscar winning Movie',
    date: '1994',
    image: img6,
    id: 6,
  },
];

export const menuItems = [
  { isActive: true, value: 'all' },
  { isActive: false, value: 'Documentary' },
  { isActive: false, value: 'Comedy' },
  { isActive: false, value: 'Horror' },
  { isActive: false, value: 'crime' },
];

export const radioDropdownItems = [
  'release date',
  'popularity',
  'random',
  'alphabetical',
];
