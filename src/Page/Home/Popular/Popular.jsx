import HorizontalCard from "../../../components/Card /HorizontalCard";
import useGetApi from "../../../Hooks/useGetApi";

export default function PopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    const { data, loading, error } = useGetApi(url);

    return (
        <div className="mt-3">
            <HorizontalCard title={'Popular Movies'} movies={data?.results || []} loading={loading} error={error} />
        </div>
    )
}
