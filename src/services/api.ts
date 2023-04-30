

import axios from "axios";

import { MovieType} from "../types/types";


type PaginateFetch = (page: number) => Promise<MovieType[] >;

export const fetchPaginatedMovies: PaginateFetch = async (page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_SOME_KEY}&page=${page}`
  );

  return data.results;
};



