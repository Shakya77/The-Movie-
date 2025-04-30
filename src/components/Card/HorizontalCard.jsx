import useEmblaCarousel from 'embla-carousel-react';
import CardDesign from './partials/CardDesign';
import useGetApi from '../../Hooks/useGetApi';
import { useNavigate } from 'react-router-dom';

const HorizontalCard = ({ title, url, week, setWeek }) => {
    const navigate = useNavigate();
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        containScroll: 'keepSnaps',
    });

    const { data, loading, error } = useGetApi(url);

    const handleSeeMore = (url, title) => {
        navigate(`/see-more/${title}`, {
            state: { url }
        });
    };

    return (
        <div className="flex justify-center mt-4">
            <div className="max-w-screen-lg w-full relative">

                {loading && (
                    <div className="flex justify-center items-center h-screen">
                        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-xl text-red-600">Error: {error}</div>
                )}

                {data && data.results && data.results.length > 0 ? (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <div className="">
                                <h1 className="text-2xl font-bold mb-4 inline-flex">{title}</h1>
                                {title === "Trending Movies" && (
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
                                )}
                            </div>
                            {title == "Popular Movies" && <button
                                type="button"
                                className="inline-flex gap-3 ml-3 p-2 text-base rounded-lg text-blue-600 hover:underline"
                                onClick={() => handleSeeMore(url, title)}>
                                See More
                            </button>}

                        </div>
                        <div className="embla" ref={emblaRef}>
                            <div className="embla__container flex gap-4">
                                {data.results
                                    ?.filter((movie) => movie.poster_path)
                                    .map((movie) => (
                                        <CardDesign
                                            key={movie.id}
                                            id={movie.id}
                                            title={movie.title}
                                            vote_average={movie.vote_average}
                                            release_date={movie.release_date}
                                            poster_path={movie.poster_path}
                                        />
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
