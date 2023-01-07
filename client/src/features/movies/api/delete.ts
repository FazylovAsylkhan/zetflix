import { BASE_URL } from './constants';

export async function deleteMovie(id: string): Promise<void> {
  await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
  });
}
