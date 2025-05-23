import React, { useEffect, useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import useGetApi from '../../Hooks/useGetApi';
import { useNavigate } from 'react-router-dom';

export default function Genre() {

    useEffect(() => {
        document.title = "Genre | The Movie House";
    }, []);

    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    const { data, loading, error } = useGetApi(url);
    const navigate = useNavigate();
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleCheckboxChange = (genreId) => {
        setSelectedGenres((prev) =>
            prev.includes(genreId)
                ? prev.filter((id) => id !== genreId)
                : [...prev, genreId]
        );
    };

    const handleGenreClick = () => {
        navigate('/genre/results', { state: { selectedGenres } });
    };

    return (
        <MainLayout>
            <div className="flex flex-grow justify-center mt-4">
                <div className="max-w-screen-lg w-full">
                    <div className="p-4">
                        <h1 className="text-xl font-bold mb-4">Select Movie Genres</h1>
                        {loading && (
                            <div className="flex justify-center items-center h-screen">
                                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                            </div>
                        )}
                        {error && <p className="text-red-500">Error: {error.message}</p>}
                        {data?.genres && (
                            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {data.genres.map((genre) => (
                                    <li
                                        key={genre.id}
                                        className="flex items-center gap-2 bg-gray-100 p-3 rounded shadow"
                                    >
                                        <input
                                            type="checkbox"
                                            id={`genre-${genre.id}`}
                                            checked={selectedGenres.includes(genre.id)}
                                            onChange={() => handleCheckboxChange(genre.id)}
                                            className="accent-blue-600"
                                        />
                                        <label htmlFor={`genre-${genre.id}`} className="cursor-pointer">
                                            {genre.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex justify-center mt-6 mb-10">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleGenreClick}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
