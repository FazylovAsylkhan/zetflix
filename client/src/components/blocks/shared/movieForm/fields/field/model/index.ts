import { ICard } from '@components/blocks';
import { IDropdownItem } from '@components/ui';
import { IField } from '../models';

const TITLE_TEXT_TITLE = 'title';
const TITLE_TEXT_MOVIE_URL = 'movie url';
const TITLE_TEXT_RATING = 'rating';
const TITLE_TEXT_RUNTIME = 'runtime';
const TITLE_TEXT_RELEASE_DATE = 'release date';
const TITLE_TEXT_OVERVIEW = 'overview';

export function getInitialState(dataMovie: ICard, dataField: IField): string {
  const titleText = dataField.title.toLowerCase();
  switch (titleText) {
    case TITLE_TEXT_TITLE:
      return dataMovie.title;
    case TITLE_TEXT_MOVIE_URL:
      return dataMovie.image;
    case TITLE_TEXT_RATING:
      return dataMovie.rating;
    case TITLE_TEXT_RUNTIME:
      return dataMovie.runtime;
    case TITLE_TEXT_RELEASE_DATE:
      return dataMovie.date;
    case TITLE_TEXT_OVERVIEW:
      return dataMovie.overview;
    default:
      return '';
  }
}
export function getListCheckedGenres(
  dataMovie: ICard,
  initialItems: IDropdownItem[]
): IDropdownItem[] {
  const genresOfTheMovie = dataMovie.subtitle.split(', ');

  const listCheckedGenres = initialItems.map((item): IDropdownItem => {
    return { ...item, isChecked: genresOfTheMovie.includes(item.value) };
  });

  return listCheckedGenres;
}
