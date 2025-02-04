import {useQuery} from '@tanstack/react-query';
import {getRequest} from '../ApiHandler';

export type Data = {
  page: number;
  results: Item[];
  total_pages: number;
  total_results: number;
};

export type Item = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  wishlist?: boolean;
};

export const useActionFilms = (page = 1) => {
  return useQuery({
    queryKey: [`action-films-${page}-`],
    queryFn: () =>
      getRequest<Data>(
        `/discover/movie?with_genres=28&language=en-US&page=${page}&sort_by=popularity.desc`,
      ),
  });
};

export const useComedyFilms = (page = 2) => {
  return useQuery({
    queryKey: [`comedy-films-${page}-`],
    queryFn: () =>
      getRequest<Data>(
        `/discover/movie?with_genres=35&language=en-US&page=${page}&sort_by=popularity.desc`,
      ),
  });
};

export const useHistoryFilms = (page = 5) => {
  return useQuery({
    queryKey: [`history-films-${page}-`],
    queryFn: () =>
      getRequest<Data>(
        `/discover/movie?with_genres=36&language=en-US&page=${page}&sort_by=popularity.desc`,
      ),
  });
};
