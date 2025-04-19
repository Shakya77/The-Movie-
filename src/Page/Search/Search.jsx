import { useLocation } from 'react-router-dom';
import useGetApi from '../../Hooks/useGetApi';
import { useEffect } from 'react';
import MovieCard from '../../components/Card /HorizontalCard';

export default function Search() {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const keyword = queryParams.get('keyword');

    const url = 'https://api.themoviedb.org/3/search/movie?query=' + keyword + '&include_adult=false&language=en-US&page=1';

    const { data, loading, error, fetchData } = useGetApi(url);

    useEffect(() => {
        if (keyword) {
            fetchData(url); // Fetch data when `url` changes
        }
    }, [keyword, fetchData, url]); // Dependency array ensures the effect runs when keyword or url changes


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Search Results for: {keyword}</h1>
            <MovieCard movies={data?.results || []} loading={loading} error={error} />
        </div>
    );
}
