import { useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import PopularMovies from "./Popular/Popular";
import Trending from "./Trending/Trending";

export default function Home() {
    useEffect(() => {
        document.title = "Home | The Movie House";
    }, []);

    return (
        <MainLayout>
            <div className="flex-grow">
                <PopularMovies />
                <Trending />
            </div>
        </MainLayout>
    );
}
