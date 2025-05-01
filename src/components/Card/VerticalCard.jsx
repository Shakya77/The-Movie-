import { useState } from "react";
import useGetApi from "../../Hooks/useGetApi";
import CardDesign from "./partials/CardDesign";

export default function VerticalCard({ title, url }) {
    const [page, setPage] = useState(1);
    const { data, loading, error } = useGetApi(`${url}&page=${page}`);

    const handleNextPage = () => {
        if (data?.total_pages > page) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

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
                        <div className="pagination flex justify-center mt-4">
                            <button
                                onClick={handlePreviousPage}
                                className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNextPage}
                                className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                                disabled={page === data.total_pages}
                            >
                                Next
                            </button>
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
