import { BASE_URL } from './constants';
import { IMovie, IMovies } from './models';

export async function getMovies(params: string): Promise<IMovies> {
  const response = await fetch(`${BASE_URL}/movies?${params}`);
  const result = (await response.json()) as unknown as IMovies;

  return result;
}

export async function getMovie(id: string): Promise<IMovie> {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  const result = (await response.json()) as unknown as IMovie;

  return result;
}
