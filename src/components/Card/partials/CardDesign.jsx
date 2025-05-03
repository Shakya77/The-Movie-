import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CardDesign({ title, vote_average, release_date, id, poster_path }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w300/";
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/details/${movieId}`);
    };

    return (
        <div className="flex-shrink-0 w-[180px]">
            <div className="relative rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
                {/* Image and loading spinner */}
                <img
                    loading="lazy"
                    src={
                        poster_path
                            ? `${imageBaseUrl}${poster_path}`
                            : 'https://via.placeholder.com/300x450?text=No+Image'
                    }
                    alt={title}
                    onLoad={() => setIsLoading(false)}
                    className={`w-full h-auto object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                />
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                        <span className="text-gray-500 text-sm">Loading...</span>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-2 text-sm">
                    <h3 className="text-base font-bold mb-1 text-center">{title}</h3>
                    <span className="text-yellow-400 font-semibold text-sm">
                        ⭐ {vote_average}
                    </span>
                    <button
                        className="mt-2 p-2 rounded-md text-xs font-semibold bg-green-400 cursor-pointer"
                        onClick={() => handleMovieClick(id)}
                    >
                        View Details
                    </button>
                </div>
            </div>

            {/* Movie title & release year */}
            <div className="text-left mt-2">
                <h3 className="text-sm text-black font-semibold w-[160px] truncate">
                    {title}
                </h3>
                <span className="text-xs text-gray-400 mt-0.5">
                    {release_date ? new Date(release_date).getFullYear() : 'N/A'}
                </span>
            </div>
        </div>
    );
}
