import { NamesFields } from '../models';

export const arrNamesField = [
  NamesFields.TITLE_MOVIE,
  NamesFields.RELEASE_DATE,
  NamesFields.URL_IMAGE,
  NamesFields.RATING,
  NamesFields.GENRE,
  NamesFields.RUNTIME,
  NamesFields.OVERVIEW,
];

export const defaultGenres = [
  { isChecked: false, value: 'Crime' },
  { isChecked: false, value: 'Documentary' },
  { isChecked: false, value: 'Horror' },
  { isChecked: false, value: 'Comedy' },
  { isChecked: false, value: 'Action' },
  { isChecked: false, value: 'Adventure' },
  { isChecked: false, value: 'Drama' },
  { isChecked: false, value: 'Biography' },
  { isChecked: false, value: 'Music' },
  { isChecked: false, value: 'Thriller' },
  { isChecked: false, value: 'Sci-Fi' },
];

export const dataFields = {
  [NamesFields.TITLE_MOVIE]: {
    title: 'title',
    placeholder: 'Name',
  },
  [NamesFields.RELEASE_DATE]: {
    title: 'RELEASE DATE',
    placeholder: 'Select Date',
  },
  [NamesFields.URL_IMAGE]: {
    title: 'movie url',
    placeholder: 'https://',
  },
  [NamesFields.RATING]: {
    title: 'RATING',
    placeholder: '7.8',
  },
  [NamesFields.GENRE]: {
    title: 'GENRE',
    placeholder: 'Select Genre',
  },
  [NamesFields.RUNTIME]: {
    title: 'RUNTIME',
    placeholder: 'minutes',
  },
  [NamesFields.OVERVIEW]: {
    title: 'OVERVIEW',
  },
};
