import MovieCard from "../components/MovieCard";
import useGetApi from "../Hooks/useGetApi";

export default function Home() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY; // or replace with your actual API key if not using env vars
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const { data, loading, error } = useGetApi(url);

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>
            <MovieCard movies={data?.results || []} loading={loading} error={error} />
        </div>
    );
}
