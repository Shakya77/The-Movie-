import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import OnBoarding from '../Page/OnBoarding/OnBoarding';
import Search from '../Page/Search/Search';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OnBoarding />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}
