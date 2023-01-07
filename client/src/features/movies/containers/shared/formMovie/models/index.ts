import { FormikErrors } from 'formik';

export enum NamesFields {
  TITLE_MOVIE = 'title',
  URL_IMAGE = 'poster_path',
  RUNTIME = 'runtime',
  RATING = 'vote_average',
  GENRE = 'genres',
  RELEASE_DATE = 'release_date',
  OVERVIEW = 'overview',
}

export interface IFormValues {
  [NamesFields.TITLE_MOVIE]: string;
  [NamesFields.RELEASE_DATE]: string;
  [NamesFields.URL_IMAGE]: string;
  [NamesFields.RATING]: string;
  [NamesFields.GENRE]: string;
  [NamesFields.RUNTIME]: string;
  [NamesFields.OVERVIEW]: string;
}

export type IFormErrors = FormikErrors<IFormValues>;
