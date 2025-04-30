import { useLocation } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout';
import useGetApi from '../../Hooks/useGetApi';
import VerticalCard from '../../components/Card/VerticalCard';

export default function Search() {
    const location = useLocation();
    const { searchSet } = location.state || {};
    const lastKeyword = searchSet ? searchSet[searchSet.length - 2] : ""; // keyword is second last element
    const lastType = searchSet ? searchSet[searchSet.length - 1] : ""; // type is the last element

    const url = `https://api.themoviedb.org/3/search/${lastType}?query=${lastKeyword}&include_adult=false&language=en-US&page=1`;

    const { data, loading, error } = useGetApi(url);

    return (
        <MainLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Search Results for: {lastKeyword} </h1>
            </div>
            <VerticalCard title="Search Results" movies={data?.results || []} loading={loading} error={error} />
        </MainLayout>
    );
}
