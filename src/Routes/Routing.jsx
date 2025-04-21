import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from '../Page/MovieDetails/MovieDetails';
import { lazy, Suspense } from 'react';
import CasterDetails from '../Page/MovieDetails/Casters/CasterDetails';
import GenreDetails from '../Page/Genre/GenreDetails';
import Random from '../Page/Random/Random';
import PrivateRoute from '../auth/PrivateRoute';
import Favorite from '../Page/Favorite/Favorite';
import Watchlist from '../Page/Watchlist/Watchlist';
import Login from '../auth/Login';
import TvShows from '../Page/tvshows/TvShows';

export default function Routing() {

    const OnBoarding = lazy(() => import('../Page/OnBoarding/OnBoarding'));
    const Home = lazy(() => import('../Page/Home/Home'));
    const Search = lazy(() => import('../Page/Search/Search'));
    const Genre = lazy(() => import('../Page/Genre/Genre'));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<OnBoarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movies" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/details/:movieId" element={<MovieDetails />} />
                <Route path="/caster/details/:casterId" element={<CasterDetails />} />
                <Route path="/genre" element={<Genre />} />
                <Route path="/genre/results" element={<GenreDetails />} />
                <Route path="/random" element={<Random />} />

                <Route path="/watchlist" element={
                    <PrivateRoute>
                        <Watchlist />
                    </PrivateRoute>}
                />
                <Route path="/favorite" element={
                    <PrivateRoute>
                        <Favorite />
                    </PrivateRoute>}
                />

                <Route path="/tvShows" element={<TvShows />} />
            </Routes>
        </Suspense>
    );
}
