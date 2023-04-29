import { useQuery } from "react-query";

import { MovieType } from "../types/types";

import axios from "axios";


type FetchMovieById = (movieId: string) => Promise<MovieType>;

const fetchMovie: FetchMovieById = async (movieId: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_SOME_KEY}`
  );

  return response.data;
};

const useFetchMovieById = (movieId: string) =>
  useQuery(["movie", movieId], () => fetchMovie(movieId));


export default useFetchMovieById;