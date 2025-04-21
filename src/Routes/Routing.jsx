import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from '../Page/MovieDetails/MovieDetails';
import { lazy, Suspense } from 'react';
import CasterDetails from '../Page/MovieDetails/Casters/CasterDetails';
import GenreDetails from '../Page/Genre/GenreDetails';
import Random from '../Page/Random/Random';

export default function Routing() {

    const OnBoarding = lazy(() => import('../Page/OnBoarding/OnBoarding'));
    const Home = lazy(() => import('../Page/Home/Home'));
    const Search = lazy(() => import('../Page/Search/Search'));
    const Genre = lazy(() => import('../Page/Genre/Genre'));
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
                    <Route path="/genre/results" element={<GenreDetails />} />
                    <Route path="/random" element={<Random />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Suspense>
        </Router>
    );
}
