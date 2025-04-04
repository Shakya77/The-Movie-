import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import OnBoarding from '../Page/OnBoarding';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OnBoarding />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}
