import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from '../Page/MovieDetails/MovieDetails';
import { lazy, Suspense } from 'react';
import CasterDetails from '../Page/MovieDetails/Casters/CasterDetails';
import Genre from '../Page/Genre/Genre';

export default function Routing() {

    const OnBoarding = lazy(() => import('../Page/OnBoarding/OnBoarding'));
    const Home = lazy(() => import('../Page/Home/Home'));
    const Search = lazy(() => import('../Page/Search/Search'));

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<OnBoarding />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/movie/details/:movieId" element={<MovieDetails />} />
                    <Route path="/caster/details/:casterId" element={<CasterDetails />} />
                    <Route path="/genre" element={<Genre />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Suspense>
        </Router>
    );
}
