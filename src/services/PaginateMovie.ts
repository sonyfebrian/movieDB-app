import { useQuery } from "react-query";

import { MovieType } from "../types/types";

import axios from "axios";

type PaginateFetch = (page: number) => Promise<MovieType[]>;

const fetchPaginatedMovies: PaginateFetch = async (page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_SOME_KEY}&page=${page}`
  );

  return data.results;
};

const usePaginatedFetchMovies = (page: number) =>
  useQuery(["movies", page], () => fetchPaginatedMovies(page), {
    keepPreviousData: true,
  });

export default usePaginatedFetchMovies;