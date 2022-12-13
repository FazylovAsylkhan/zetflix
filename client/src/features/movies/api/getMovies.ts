import { IGetMoviesResponse } from './models';

export async function getMovies(params: string): Promise<IGetMoviesResponse> {
  const baseUrl = 'http://localhost:4000';
  const response = await fetch(`${baseUrl}/movies${params}`);
  const result = (await response.json()) as unknown as IGetMoviesResponse;

  return result;
}
