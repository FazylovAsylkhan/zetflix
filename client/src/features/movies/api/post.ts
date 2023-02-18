import { BASE_URL } from './constants';
import { IMovieEssential } from './models';

export async function postMovie(body: IMovieEssential): Promise<void> {
  await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    body: JSON.stringify(body),
    mode: 'cors',
    headers: { 'Content-type': 'application/json;charset=utf-8' },
  });
}
