import { IDropdownItem } from '@common/components';

export enum NamesFields {
  TITLE_MOVIE = 'titleMovie',
  URL_IMAGE = 'urlImage',
  RUNTIME = 'runtime',
  RATING = 'rating',
  GENRE = 'genre',
  RELEASE_DATE = 'releaseDate',
  OVERVIEW = 'overview',
}

export interface IFieldsData {
  [NamesFields.TITLE_MOVIE]: string;
  [NamesFields.RELEASE_DATE]: string;
  [NamesFields.GENRE]: IDropdownItem[];
  [NamesFields.OVERVIEW]: string;
  [NamesFields.RATING]: string;
  [NamesFields.RUNTIME]: string;
  [NamesFields.URL_IMAGE]: string;
}

export type INamesField =
  | NamesFields.TITLE_MOVIE
  | NamesFields.RELEASE_DATE
  | NamesFields.GENRE
  | NamesFields.OVERVIEW
  | NamesFields.RATING
  | NamesFields.RUNTIME
  | NamesFields.URL_IMAGE;
