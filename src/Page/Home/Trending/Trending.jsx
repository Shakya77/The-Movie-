import { useState } from "react";
import HorizontalCard from "../../../components/Card/HorizontalCard";

export default function Trending() {
    const [week, setWeek] = useState("day");
    const url = `https://api.themoviedb.org/3/trending/movie/${week}`;

    return (
        <div className="p-4">
            <HorizontalCard
                title="Trending Movies"
                week={week}
                setWeek={setWeek}
                url={url}
            />
        </div>
    );
}
