import Home from "../Page/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
