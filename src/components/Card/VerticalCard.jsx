import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerticalCard({ title, movies, error, url }) {
    const { data, loading, error } = useGetApi(url);
    const [showLoader, setShowLoader] = useState(true);
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/details/${movieId}`);
    };

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => setShowLoader(false), 1500);
            return () => clearTimeout(timer);
        } else {
            setShowLoader(false);
        }
    }, [loading]);

    return (
        <div className="flex justify-center mt-4">
            <div className="max-w-screen-lg w-full relative px-4">
                {showLoader && (
                    <div className="flex justify-center items-center h-screen">
                        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-xl text-red-600">Error: {error}</div>
                )}

                {!showLoader && movies && movies.length > 0 ? (
                    <>
                        <h1 className="text-2xl font-bold mb-6">{title}</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {movies.map((movie) => (
                                <div key={movie.id} className="flex-shrink-0">
                                    <div className="relative rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer">
                                        <img
                                            src={
                                                movie.poster_path
                                                    ? `${imageBaseUrl}${movie.poster_path}`
                                                    : 'https://via.placeholder.com/500x750?text=No+Image'
                                            }
                                            alt={movie.title}
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-2 text-sm">
                                            <h3 className="text-base font-bold mb-1 text-center">{movie.title}</h3>
                                            <span className="text-yellow-400 font-semibold text-sm">
                                                ⭐ {movie.vote_average}
                                            </span>
                                            <button
                                                className="mt-2 px-3 py-1 rounded-md text-xs font-semibold bg-green-500 hover:bg-green-600"
                                                onClick={() => handleMovieClick(movie.id)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-left mt-2">
                                        <h3 className="text-sm text-black font-semibold w-full truncate">
                                            {movie.title}
                                        </h3>
                                        <span className="text-xs text-gray-500">
                                            {new Date(movie.release_date).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    !loading &&
                    !error && (
                        <div className="text-center text-xl text-gray-500">
                            No movies found.
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
