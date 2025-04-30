import useGetApi from "../../Hooks/useGetApi";
import CardDesign from "./partials/CardDesign";

export default function VerticalCard({ title, url }) {
    const { data, loading, error } = useGetApi(url);
    console.log(data);
    return (
        <div className="flex justify-center mt-4">
            <div className="max-w-screen-lg w-full relative px-4">
                {loading && (
                    <div className="flex justify-center items-center h-screen">
                        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-xl text-red-600">Error: {error}</div>
                )}

                {data && data.results && data.results.length > 0 ? (
                    <>
                        <h1 className="text-2xl font-bold mb-6">{title}</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {data?.results
                                ?.filter((movie) => movie.poster_path).map((movie) => (
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
