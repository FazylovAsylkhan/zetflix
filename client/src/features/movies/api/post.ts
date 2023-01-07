import { BASE_URL } from './constants';
import { IMovie } from './models';

export async function postMovie(body: IMovie): Promise<void> {
  await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    body: JSON.stringify(body),
    mode: 'cors',
    headers: { 'Content-type': 'application/json;charset=utf-8' },
  });
}
