import { useState } from "react"

import Card, { MovieCardData } from "../Card"
import { usePaginatedFetchMovies } from "../../services/PaginateMovie";
import LoadingPoster from "../Shared/LoadingPoster";

const Popular = () => {
    const [page, setPage] = useState<number>(1);
    const { data: movies, isLoading } = usePaginatedFetchMovies(page);

    return (
        <>
            {isLoading ? (
                Array(20)
                    .fill(0)
                    .map((_, index) => <div key={index} className="grid grid-flow-col gap-2 overflow-x-auto mt-3 mx-3 pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-300"><LoadingPoster key={index} /></div>)
            ) : (
                <>
                    <div className="flex items-center justify-between  mx-4">

                        <div className="flex items-center space-x-2 fill-gray-500">

                            <button
                                type="button"
                                onClick={() => setPage((prevPage) => prevPage - 1)}
                                disabled={page === 1 ? true : false}
                            >
                                <svg className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
                                </svg>
                            </button>
                            <button

                                type="button"
                                onClick={() => setPage((prevPage) => prevPage + 1)}
                                disabled={false}
                            >
                                <svg className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
                                </svg>
                            </button>

                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-2 overflow-x-auto mt-3 mx-3 pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-300">
                        {movies?.map(
                            ({ id, poster_path, original_title }: MovieCardData, i) => {
                                return (
                                    <Card
                                        key={i}
                                        id={id}
                                        poster_path={poster_path}
                                        original_title={original_title}


                                    />
                                );
                            }
                        )}

                    </div></>
            )}

        </>
    );
}

export default Popular