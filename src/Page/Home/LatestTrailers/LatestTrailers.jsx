import useGetApi from "../../../Hooks/useGetApi";

export default function LatestTrailers() {
    const url = 'https://api.themoviedb.org/3/movie/latest';
    const { data, loading, error } = useGetApi(url);

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    if (loading) return <div className="text-center text-lg text-blue-500">Loading...</div>;
    if (error) return <div className="text-center text-lg text-red-500">Error: {error}</div>;

    // If it's not in English or if no data
    if (!data || data.original_language !== "en") {
        return (
            <div className="text-center text-gray-500 text-lg">
                No English trailer found at the moment.
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Latest English Trailer</h2>

            {data.poster_path && (
                <img
                    src={`${imageBaseUrl}${data.poster_path}`}
                    alt={data.title}
                    className="rounded-lg shadow-md mx-auto mb-4"
                />
            )}

            <h3 className="text-xl font-semibold mb-1">{data.title}</h3>
            <p className="text-gray-600 text-sm mb-2">Released: {data.release_date}</p>
            <p className="text-gray-700">{data.overview || "No overview available."}</p>
        </div>
    );
}
