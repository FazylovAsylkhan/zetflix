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
    label: 'Select Genre',
    options: [
      'Crime',
      'Documentary',
      'Horror',
      'Comedy',
      'Action',
      'Adventure',
      'Drama',
      'Biography',
      'Music',
      'Thriller',
      'Sci-Fi',
    ],
  },
  [NamesFields.RUNTIME]: {
    title: 'RUNTIME',
    placeholder: 'minutes',
  },
  [NamesFields.OVERVIEW]: {
    title: 'OVERVIEW',
  },
};
