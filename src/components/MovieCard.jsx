import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movies, loading, error }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/details/${movieId}`);
    };

    return (
        <div className="container mx-auto p-4">
            {loading && (
                <div className="text-center text-xl text-gray-600">Loading...</div>
            )}

            {error && (
                <div className="text-center text-xl text-red-600">Error: {error}</div>
            )}

            {movies && movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="relative group bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                        >
                            <img
                                src={
                                    movie.poster_path
                                        ? `${imageBaseUrl}${movie.poster_path}`
                                        : 'https://via.placeholder.com/500x750?text=No+Image'
                                }
                                alt={movie.title}
                                className="w-full aspect-[2/3] object-cover"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4">
                                <h3 className="text-xl font-bold mb-2 text-center">{movie.title}</h3>
                                <span className="text-yellow-400 font-semibold text-lg">
                                    ⭐ {movie.vote_average}
                                </span>
                            </div>

                            {/* Clickable Layer */}
                            <button
                                onClick={() => handleMovieClick(movie.id)}
                                className="absolute inset-0 z-10"
                                aria-label={`View details for ${movie.title}`}
                            />
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
