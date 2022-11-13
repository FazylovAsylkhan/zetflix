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
    stateTooltip: {
      isOpenedModalSettings: false,
      isShownTooltips: false,
    },
    id: 1,
  },
  {
    title: 'Bohemian Rhapsody',
    subtitle: 'Drama, Biography, Music',
    date: '2003',
    image: img2,
    stateTooltip: {
      isOpenedModalSettings: false,
      isShownTooltips: false,
    },
    id: 2,
  },
  {
    title: 'Kill Bill: Vol 2',
    subtitle: 'Oscar winning Movie',
    date: '1994',
    image: img3,
    stateTooltip: {
      isOpenedModalSettings: false,
      isShownTooltips: false,
    },
    id: 3,
  },
  {
    title: 'Avengers: War of Infinity',
    subtitle: 'Action & Adventure',
    date: '2004',
    image: img4,
    stateTooltip: {
      isOpenedModalSettings: false,
      isShownTooltips: false,
    },
    id: 4,
  },
  {
    title: 'Inception',
    subtitle: 'Action & Adventure',
    date: '2003',
    image: img5,
    stateTooltip: {
      isOpenedModalSettings: false,
      isShownTooltips: false,
    },
    id: 5,
  },
  {
    title: 'Reservoir dogs',
    subtitle: 'Oscar winning Movie',
    date: '1994',
    image: img6,
    stateTooltip: {
      isOpenedModalSettings: false,
      isShownTooltips: false,
    },
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

export const selectOptions = [
  'release date',
  'popularity',
  'random',
  'alphabetical',
];

const genres = [
  { isChecked: false, value: 'Crime' },
  { isChecked: true, value: 'Documentary' },
  { isChecked: false, value: 'Horror' },
  { isChecked: true, value: 'Comedy' },
];

export const INPUT_TEXT = 'text';
export const INPUT_DATE = 'inputDate';
export const TEXTAREA = 'textarea';
export const DROPDOWN = 'dropdown';

export const MovieFormfields = [
  {
    title: 'title',
    placeholder: 'Name',
    componentType: INPUT_TEXT,
  },
  {
    title: 'RELEASE DATE',
    placeholder: 'Select Date',
    componentType: INPUT_DATE,
  },
  {
    title: 'movie url',
    placeholder: 'https://',
    componentType: INPUT_TEXT,
  },
  {
    title: 'RATING',
    placeholder: '7.8',
    componentType: INPUT_TEXT,
  },
  {
    title: 'GENRE',
    placeholder: 'Select Genre',
    initialItems: genres,
    componentType: DROPDOWN,
  },
  {
    title: 'RUNTIME',
    placeholder: 'minutes',
    componentType: INPUT_TEXT,
  },
  {
    title: 'OVERVIEW',
    componentType: TEXTAREA,
  },
];

export const confirmMessage = {
  title: 'Delete Movie',
  description: 'Are you sure you want to delete this movie?',
  textButton: 'confirm',
};

export const alertMessage = {
  title: 'congratulations !',
  description: 'The movie has been added to database successfully ',
};
