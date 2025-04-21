import { useState } from "react";
import HorizontalCard from "../../../components/Card/HorizontalCard";
import useGetApi from "../../../Hooks/useGetApi";

export default function Trending() {
    const [week, setWeek] = useState("week");
    const url = `https://api.themoviedb.org/3/trending/movie/${week}?language=en-US`;
    const { data, loading, error } = useGetApi(url);
    return (
        <div className="p-4">
            <HorizontalCard
                title="Trending Movies"
                movies={data?.results || []}
                loading={loading}
                error={error}
                week={week}
                setWeek={setWeek}
            />
        </div>
    );
}
