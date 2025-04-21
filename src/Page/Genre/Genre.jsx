import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import useGetApi from '../../Hooks/useGetApi';

export default function Genre() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY&language=en-US';
    const { data, loading, error } = useGetApi(url);

    return (
        <MainLayout>
            <div className="flex justify-center mt-4">
                <div className="max-w-screen-lg w-full">
                    <div className="p-4">
                        <h1 className="text-xl font-bold mb-4">Movie Genres</h1>
                        {loading && <p>Loading genres...</p>}
                        {error && <p className="text-red-500">Error: {error.message}</p>}

                        {data?.genres && (
                            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {data.genres.map((genre) => (
                                    <li key={genre.id} className="bg-gray-200 p-3 rounded shadow text-center">
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>
                        )}

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
