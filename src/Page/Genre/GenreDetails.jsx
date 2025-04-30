import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout';
import VerticalCard from '../../components/Card/VerticalCard';

export default function GenreDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const { selectedGenres } = location.state || { selectedGenres: [] };

    useEffect(() => {
        if (!selectedGenres || selectedGenres.length === 0) {
            navigate('/genre');
        }
    }, [selectedGenres, navigate]);

    useEffect(() => {
        document.title = "Search By Genre | The Movie House";
    }, []);

    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenres}`;

    return (
        <MainLayout>
            <div className="p-6 max-w-screen-lg mx-auto">
                <VerticalCard title="Movies by Genre" url={url} />
            </div>
        </MainLayout>
    )
}
