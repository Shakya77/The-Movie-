import { useNavigate } from "react-router-dom";

export default function CardDesign({ title, vote_average, release_date, id, poster_path }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/details/${movieId}`);
    };

    return (
        <div className="flex-shrink-0 w-[180px]">
            <div className="relative rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
                <img
                    loading="lazy"
                    src={
                        poster_path
                            ? `${imageBaseUrl}${poster_path}`
                            : 'https://via.placeholder.com/500x750?text=No+Image'
                    }
                    alt={title}
                    className="w-full h-auto object-cover"
                />
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

            <div className="text-left mt-2">
                <h3 className="text-sm text-black font-semibold w-[160px] truncate">
                    {title}
                </h3>
                <span className="text-xs text-gray-400 mt-0.5">
                    {new Date(release_date).getFullYear()}
                </span>
            </div>
        </div>
    );
}
