import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movies, loading, error }) => {
    const [showLoader, setShowLoader] = useState(true);
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/details/${movieId}`);
    };

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            setShowLoader(false);
        }
    }, [loading]);

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const stopDrag = () => setIsDragging(false);

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-3/4 mx-auto">
            {showLoader && (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}

            {error && (
                <div className="text-center text-xl text-red-600">Error: {error}</div>
            )}

            {movies && movies.length > 0 ? (
                <>
                    <h1 className="text-2xl font-bold">Popular Movies</h1>

                    <div
                        className="overflow-x-auto scrollbar-hidden cursor-grab active:cursor-grabbing select-none"
                        ref={scrollRef}
                        onMouseDown={startDrag}
                        onMouseLeave={stopDrag}
                        onMouseUp={stopDrag}
                        onMouseMove={onDrag}
                    >
                        <div className="flex flex-nowrap gap-4 py-4">
                            {movies.map((movie) => (
                                <div key={movie.id} className="flex-shrink-0 w-[160px]">
                                    <div className="relative rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
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
                                                className="mt-2 p-2 rounded-md text-xs font-semibold bg-green-400 cursor-pointer"
                                                onClick={() => handleMovieClick(movie.id)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-left mt-2">
                                        <h3 className="text-sm text-black font-semibold w-[160px] truncate">
                                            {movie.title}
                                        </h3>
                                        <span className="text-xs text-gray-400 mt-0.5">
                                            {new Date(movie.release_date).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
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
    );
};

export default MovieCard;
