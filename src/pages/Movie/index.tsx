
import { useNavigate, useParams } from "react-router-dom";

import useFetchMovieById from "../../services/FetchMovie";



const Movie = () => {
    const { id } = useParams();
    const { data: movie } = useFetchMovieById(id || "");

    const navigate = useNavigate();
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">MOVIE NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{movie?.original_title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 mr-6">{movie?.vote_average}</span>
                                </span>

                            </div>
                            <p className="leading-relaxed">{movie?.overview}</p>
                            <p className="flex items-center ">
                                <span className="mr-3 "> Run Time</span>
                                <span className="font-bold">{movie?.runtime}</span>

                            </p>
                            <div className="flex  items-center pb-2 border-t-2 border-gray-100 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3 ">Genre</span>
                                    <span className="font-bold"> {movie?.genres.map(({ name }) => name).join(", ")}</span>
                                </div>
                            </div>
                            <button onClick={() => navigate("/")} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Back</button>


                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Movie;