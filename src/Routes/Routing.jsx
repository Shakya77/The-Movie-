import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import OnBoarding from '../Page/OnBoarding/OnBoarding';
import Search from '../Page/Search/Search';
import MovieDetails from '../Page/MovieDetails/MovieDetails';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OnBoarding />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/details/:movieId" element={<MovieDetails />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}
