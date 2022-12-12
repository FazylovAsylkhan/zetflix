import { IDropdownItem } from '@common/components';
import { IMovie } from '@features/movies/api';
import { defaultGenres } from '../constants';
import { IFieldsData, NamesFields } from '../models';

function getListCheckedGenres(
  genres: string[],
  listGenres: IDropdownItem[]
): IDropdownItem[] {
  const listCheckedGenres = listGenres.map((item) => {
    return { ...item, isChecked: genres.includes(item.value) };
  });
  return listCheckedGenres;
}
export function getFilledDataForFields(movie?: IMovie): IFieldsData {
  let listCheckedGenres: IDropdownItem[];
  let runtime: string;
  let rating: string;

  if (movie !== undefined) {
    listCheckedGenres = getListCheckedGenres(movie.genres, defaultGenres);
    runtime = String(movie.runtime);
    rating = String(movie.revenue);
  } else {
    listCheckedGenres = defaultGenres;
    runtime = '';
    rating = '';
  }

  return {
    [NamesFields.TITLE_MOVIE]: movie?.title ?? '',
    [NamesFields.RELEASE_DATE]: movie?.release_date ?? '',
    [NamesFields.GENRE]: listCheckedGenres,
    [NamesFields.OVERVIEW]: movie?.overview ?? '',
    [NamesFields.RATING]: rating,
    [NamesFields.RUNTIME]: runtime,
    [NamesFields.URL_IMAGE]: movie?.poster_path ?? '',
  };
}
