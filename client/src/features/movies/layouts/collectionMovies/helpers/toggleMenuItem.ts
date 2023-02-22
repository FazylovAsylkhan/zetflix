import { IMenuGenre } from '../models';

export function toggleMenuItem(
  genres: IMenuGenre[],
  selectedGenre: string
): IMenuGenre[] {
  return genres.map((genre) => {
    const isSelectedGenre =
      selectedGenre.toLowerCase() === genre.value.toLowerCase();
    if (isSelectedGenre) {
      return {
        ...genre,
        isActive: true,
      };
    }
    return {
      ...genre,
      isActive: false,
    };
  });
}
