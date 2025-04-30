import { useLocation } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout';
import VerticalCard from '../../components/Card/VerticalCard';

export default function Search() {
    const location = useLocation();
    const { search = "", type = "movie" } = location.state || {};
    const url = `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1`;

    return (
        <MainLayout>
            <div className="container mx-auto p-4 ">
                <h1 className="text-3xl font-bold text-center mt-6">Search Results for: {search} </h1>
            </div>
            <VerticalCard title="Search Results" url={url} />
        </MainLayout>
    );
}
