import Footer from "../../Layouts/Footer";
import MainLayout from "../../Layouts/MainLayout";
import Navbar from "../../Layouts/Navbar";
import LatestTrailers from "./LatestTrailers/LatestTrailers";
import PopularMovies from "./Popular/Popular";
import Trending from "./Trending/Trending";

export default function Home() {
    return (
        <MainLayout>
            <PopularMovies />
            <Trending />
            <LatestTrailers />
        </MainLayout>
    );
}
