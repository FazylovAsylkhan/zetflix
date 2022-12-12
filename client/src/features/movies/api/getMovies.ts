import { IMovie } from './models';

export interface IGetMoviesResponse {
  data: IMovie[];
  limit: number;
  offset: number;
  totalAmount: number;
}

export async function getMovies(params: string): Promise<IGetMoviesResponse> {
  const baseUrl = 'http://localhost:4000';
  const response = await fetch(`${baseUrl}/movies${params}`);
  const result = (await response.json()) as unknown as IGetMoviesResponse;

  return result;
}
