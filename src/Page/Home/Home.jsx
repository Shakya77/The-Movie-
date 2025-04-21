import MainLayout from "../../Layouts/MainLayout";
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
