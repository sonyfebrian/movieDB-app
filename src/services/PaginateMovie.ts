import { useQuery } from "react-query";
import { fetchPaginatedMovies } from "./api";



export const usePaginatedFetchMovies = (page: number) =>
  useQuery(["movies", page], () => fetchPaginatedMovies(page), {
    keepPreviousData: true,
  });



// export default usePaginatedFetchMovies;