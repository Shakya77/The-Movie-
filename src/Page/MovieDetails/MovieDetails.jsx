import { useParams } from "react-router-dom";
import useGetApi from "../../Hooks/useGetApi";
import Video from "./Video";
import Casters from "./Casters/Casters";
import MainLayout from "../../Layouts/MainLayout";
import { useEffect } from "react";
import WatchProviders from "./WatchProviders/WatchProviders";
import Similar from "./Similar/Similar";

export default function MovieDetails() {
    const { movieId } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const { data, loading, error } = useGetApi(url);
    const title = data.original_title;

    useEffect(() => {
        document.title = `${title} | The Movie House`;
    }, [title]);

    return (
        <MainLayout>
            <div className="flex flex-col items-center text-center p-5 font-sans">
                {loading && <div className="text-red-500 text-lg font-bold">Loading...</div>}
                {error && <div className="text-red-500 text-lg font-bold">Error: {error}</div>}
                {!loading && !error && data && (
                    <>
                        <div className="flex text-left gap-16 flex-col md:flex-row ">
                            <img
                                className="mt-5 w-72 rounded-lg shadow-lg"
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                alt={data.original_title}
                            />
                            <div className="mt-5">
                                <h1 className="text-2xl font-bold mb-2">{data.original_title}</h1>
                                <p className="max-w-xl text-base text-gray-700 leading-relaxed">
                                    {data.overview}
                                </p>
                                <div className="">
                                    <WatchProviders movieId={movieId} />
                                </div>
                            </div>
                        </div>
                        <Casters movie_id={movieId} />
                        <Video movieId={movieId} />
                        <Similar movieId={movieId} />
                    </>
                )}
            </div>
        </MainLayout>

    );
}
