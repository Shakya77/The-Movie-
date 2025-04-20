import Footer from "../../Layouts/Footer";
import Navbar from "../../Layouts/Navbar";
import LatestTrailers from "./LatestTrailers/LatestTrailers";
import PopularMovies from "./Popular/Popular";
import Trending from "./Trending/Trending";

export default function Home() {
    return (
        <div className="">
            <Navbar />
            <PopularMovies />
            <Trending />
            <LatestTrailers />
            <Footer />
        </div>
    );
}
