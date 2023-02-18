import { IMovie, IMovieEssential } from '@features/movies/api';
import { IFormValues, NamesFields } from '../models';

export const getNormalizedData = (data: IFormValues): IMovieEssential => {
  return {
    ...data,
    [NamesFields.GENRE]: data[NamesFields.GENRE]
      .split(',')
      .filter((g) => g !== ''),
    [NamesFields.RATING]: Number(data[NamesFields.RATING]),
    [NamesFields.RUNTIME]: Number(data[NamesFields.RUNTIME]),
  };
};

export function getInitialData(movie: IMovie | null = null): IFormValues {
  const rating = String(movie?.vote_average ?? '');
  const runtime = String(movie?.runtime ?? '');

  return {
    [NamesFields.TITLE_MOVIE]: movie?.title ?? '',
    [NamesFields.RELEASE_DATE]: movie?.release_date ?? '',
    [NamesFields.GENRE]: movie?.genres.join(',') ?? '',
    [NamesFields.OVERVIEW]: movie?.overview ?? '',
    [NamesFields.RATING]: rating,
    [NamesFields.RUNTIME]: runtime,
    [NamesFields.URL_IMAGE]: movie?.poster_path ?? '',
  };
}
