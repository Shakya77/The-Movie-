import { useEffect, useState } from "react";
import useGetApi from "../../../Hooks/useGetApi";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

export default function Casters({ movie_id }) {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
    const { data, loading, error } = useGetApi(url);
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        dragFree: true,        // 💡 Smooth, free scrolling
        containScroll: 'trimSnaps',
    });

    const [showLoader, setShowLoader] = useState(true);
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();

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

    const casterNavigate = (casterId) => {
        navigate(`/caster/details/${casterId}`);
    };

    return (
        <div className="flex justify-center mt-4">
            <div className="max-w-screen-lg w-full">
                {showLoader && (
                    <div className="flex justify-center items-center h-screen">
                        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-xl text-red-600">Error: {error}</div>
                )}

                {data?.cast?.length > 0 ? (
                    <>
                        <h2 className="text-xl font-bold mb-2">Top Cast</h2>

                        {/* Embla Carousel container */}
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container">
                                {data.cast.map((cast) => (
                                    <div
                                        key={cast.cast_id}
                                        onClick={() => casterNavigate(cast.id)}
                                        className="embla__slide"
                                    >
                                        <img
                                            src={
                                                cast.profile_path
                                                    ? `${imageBaseUrl}${cast.profile_path}`
                                                    : 'https://via.placeholder.com/500x750?text=No+Image'
                                            }
                                            alt={cast.name}
                                            className="rounded-lg h-48 w-full object-cover shadow-md"
                                        />
                                        <h3 className="text-sm font-semibold mt-2 truncate">{cast.name}</h3>
                                        <p className="text-xs text-gray-500 truncate">as {cast.character}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    !loading &&
                    !error && (
                        <div className="text-center text-xl text-gray-500">
                            No casters found.
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
