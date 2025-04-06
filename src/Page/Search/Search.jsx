import { useLocation } from 'react-router-dom';
import useGetApi from '../../Hooks/useGetApi';
import { useEffect } from 'react';

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

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Search Results for: {keyword}</h1>

            {loading && (
                <div className="text-center text-xl text-gray-600">Loading...</div>
            )}

            {error && (
                <div className="text-center text-xl text-red-600">Error: {error}</div>
            )}

            {data && data.results && data.results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.results.map((movie) => (
                        <div key={movie.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            {/* Movie Poster Image */}
                            <img
                                src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                                alt={movie.title}
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">{movie.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{movie.overview}</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && !error && (
                    <div className="text-center text-xl text-gray-500">No movies found.</div>
                )
            )}
        </div>
    );
}
