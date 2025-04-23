import HorizontalCard from "../../../components/Card/HorizontalCard";
import useGetApi from "../../../Hooks/useGetApi";

export default function Similar({ movieId }) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar`
    const { data, loading, error } = useGetApi(url);

    return (
        <>
            {loading && <div className="text-red-500 text-lg font-bold">Loading...</div>}
            {error && <div className="text-red-500 text-lg font-bold">Error: {error}</div>}
            {!loading && !error && data && (

                <HorizontalCard count={4} title={'Similar Movies'} movies={data?.results || []} loading={loading} error={error} />
            )}
        </>
    )
}
