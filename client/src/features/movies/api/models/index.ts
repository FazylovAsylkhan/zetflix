export interface IMovie {
  id: number;
  budget: number;
  genres: string[];
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  tagline: string;
  title: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
}

export interface IGetMoviesResponse {
  data: IMovie[];
  limit: number;
  offset: number;
  totalAmount: number;
}
