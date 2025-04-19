import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movies, loading, error }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/details/${movieId}`);
    };

    return (
        <div>
            {loading && (
                <div className="text-center text-xl text-gray-600">Loading...</div>
            )}

            {error && (
                <div className="text-center text-xl text-red-600">Error: {error}</div>
            )}

            {movies && movies.length > 0 ? (

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">

                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="flex flex-col items-center cursor-pointer group"
                            onClick={() => handleMovieClick(movie.id)}
                        >
                            <div className="relative w-[160px] rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                <img
                                    src={
                                        movie.poster_path
                                            ? `${imageBaseUrl}${movie.poster_path}`
                                            : 'https://via.placeholder.com/500x750?text=No+Image'
                                    }
                                    alt={movie.title}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-2 text-sm">
                                    <h3 className="text-base font-bold mb-1 text-center">{movie.title}</h3>
                                    <span className="text-yellow-400 font-semibold text-sm">
                                        ⭐ {movie.vote_average}
                                    </span>
                                </div>
                            </div>

                            {/* Title & Year */}
                            <h3 className="mt-2 text-sm text-center text-white font-semibold group-hover:text-yellow-300">
                                {movie.title}
                            </h3>
                            <span className="text-xs text-gray-400 mt-0.5">
                                {new Date(movie.release_date).getFullYear()}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                !loading &&
                !error && (
                    <div className="text-center text-xl text-gray-500">
                        No movies found.
                    </div>
                )
            )}
        </div>
    );
};

export default MovieCard;
