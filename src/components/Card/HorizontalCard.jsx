import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HorizontalCard = ({ title, movies, loading, error, week, setWeek }) => {
    const [showLoader, setShowLoader] = useState(true);
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();

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

    const [emblaRef] = useEmblaCarousel({
        loop: false,
        dragFree: true, // Smooth, free scrolling
        containScroll: 'keepSnaps',
    });

    return (
        <div className="flex justify-center mt-4">
            <div className="max-w-screen-lg w-full relative">

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
                        <h1 className="text-2xl font-bold mb-4 inline-flex">{title}</h1>
                        {/* Toggle from inside MovieCard */}
                        {title === "Trending Movies" &&
                            <span className="inline-flex gap-3 ml-3">
                                <button
                                    onClick={() => setWeek("day")}
                                    className={`px-3 py-2 rounded-lg font-medium transition ${week === "day"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                        }`}
                                >
                                    Today
                                </button>
                                <button
                                    onClick={() => setWeek("week")}
                                    className={`px-3 py-2 rounded-lg font-medium transition ${week === "week"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                        }`}
                                >
                                    This Week
                                </button>
                            </span>
                        }

                        {/* Embla Carousel */}
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container flex gap-4">
                                {movies.map((movie) => (
                                    <div key={movie.id} className="flex-shrink-0 w-[180px]">
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
        </div >
    );
};

export default HorizontalCard;
