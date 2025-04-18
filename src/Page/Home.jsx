import MovieCard from "../components/Card /HorizontalCard";
import useGetApi from "../Hooks/useGetApi";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

export default function Home() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const { data, loading, error } = useGetApi(url);

    return (
        <div className="">
            <Navbar />
            <MovieCard movies={data?.results || []} loading={loading} error={error} />
            <Footer />
        </div>
    );
}
