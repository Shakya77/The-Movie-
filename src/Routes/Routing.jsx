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
import MovieWatchTime from '../Page/WatchTime/MovieWatchTime';
import TvShowsWatchTime from '../Page/WatchTime/TvShowsWatchTime';
import AddMovie from '../Page/Admin/AddMovie';
import ShowMovie from '../Page/Admin/ShowMovie.jsx/ShowMovie';
import SeeMore from '../SeeMore/SeeMore';

export default function Routing() {

    const OnBoarding = lazy(() => import('../Page/OnBoarding/OnBoarding'));
    const Home = lazy(() => import('../Page/Home/Home'));
    const Search = lazy(() => import('../Page/Search/Search'));
    const Genre = lazy(() => import('../Page/Genre/Genre'));

    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>}>

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
                <Route path="/favorite" element=
                    {
                        <PrivateRoute>
                            <Favorite />
                        </PrivateRoute>
                    }
                />
                <Route path="/addMovie" element=
                    {
                        <PrivateRoute>
                            <AddMovie />
                        </PrivateRoute>
                    }
                />
                <Route path="/showMovie" element=
                    {
                        <PrivateRoute>
                            <ShowMovie />
                        </PrivateRoute>
                    }
                />
                <Route path="/tvShows" element={<TvShows />} />

                <Route path='/watchtime/movies' element={<MovieWatchTime />} />
                <Route path='/watchtime/tvShows' element={<TvShowsWatchTime />} />

                <Route path='/see-more/:title' element={<SeeMore />} />
            </Routes>
        </Suspense>
    );
}
