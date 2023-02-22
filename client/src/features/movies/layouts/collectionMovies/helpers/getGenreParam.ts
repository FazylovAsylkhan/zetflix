export const getGenreParam = (genre: string): string => {
  const isAllGenres = genre === 'all';
  return isAllGenres ? '' : genre;
};
