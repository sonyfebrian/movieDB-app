import { useState } from "react";
import { MovieType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFavorite, removeFavorite } from "../../redux/reducers/movieSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";



export type MovieCardData = Omit<
    MovieType,
    "overview" | "vote_average" | "runtime" | "genres" | "vote_count" | "popularity" | "video" | "backdrop_path" | "genre_ids" | "adult" | "total_pages" | "total_results" | "page"
>;

const Card = (movieData: MovieCardData,) => {
    const { movies } = useAppSelector((state) => state.favorites);

    const dispatch = useAppDispatch();
    const [isFavorites, setIsFavorites] = useState<boolean>(() => {
        const isFavoriteMovie = movies.find((movie) => movie.id === movieData.id);
        return !!isFavoriteMovie;
    });

    const notifyAdd = () => {
        toast.success(`${movieData.original_title} has been added to your favorites list!`, { autoClose: 3000 })
    }
    const notifyRemove = () => {
        toast.success(`${movieData.original_title} has been remove to your favorites list!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    const handleFavorites = () => {
        if (isFavorites) {
            dispatch(removeFavorite(movieData.id));
            setIsFavorites((prevState) => !prevState);
            notifyRemove()
        } else {
            dispatch(addFavorite(movieData));
            setIsFavorites((prevState) => !prevState);
            notifyAdd();
        }
    };


    return (
        <>
            <div className="h-60 w-40 flex flex-col bg-gray-200 items-center justify-center mb-3 text-gray-400 cursor-pointer rounded-xl relative overflow-hidden">



                <img
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                    alt={movieData.original_title}
                />



                <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between mr-3">

                    <button onClick={handleFavorites} className="p-2.5 bg-gray-800/80 bg-gradient-to-t from-black/50 rounded-lg text-white self-end hover:bg-red-600/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="self-center flex flex-col items-center space-y-2">
                        <Link to={`/movie/${movieData.id}`} style={{ textDecoration: "none" }}>
                            <span className="capitalize text-white font-medium drop-shadow-md">More Details</span>
                        </Link>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Card;