import { IMovie, IMovies } from './models';

const baseUrl = 'http://localhost:4000';

export async function getMovies(params: string): Promise<IMovies> {
  const response = await fetch(`${baseUrl}/movies?${params}`);
  const result = (await response.json()) as unknown as IMovies;

  return result;
}

export async function getMovie(id: string): Promise<IMovie> {
  const response = await fetch(`${baseUrl}/movies/${id}`);
  const result = (await response.json()) as unknown as IMovie;

  return result;
}
