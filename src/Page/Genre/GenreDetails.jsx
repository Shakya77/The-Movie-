import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useGetApi from '../../Hooks/useGetApi';
import VerticalCard from '../../components/Card/VerticalCard';
import MainLayout from '../../Layouts/MainLayout';

export default function GenreDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const { selectedGenres } = location.state || { selectedGenres: [] };

    useEffect(() => {
        if (!selectedGenres || selectedGenres.length === 0) {
            navigate('/genre');
        }
    }, [selectedGenres, navigate]);
    console.log(selectedGenres);
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const { data, loading, error } = useGetApi(url);

    const filteredMovies = data?.results?.filter((movie) =>
        movie.genre_ids?.some((id) => selectedGenres.includes(id))
    );

    return (
        <MainLayout>
            <div className="p-6 max-w-screen-lg mx-auto">
                <VerticalCard title="Movies by Genre" movies={filteredMovies} loading={loading} error={error} />
            </div>
        </MainLayout>
    )
}
