import HorizontalCard from "../../../components/Card/HorizontalCard";
import useGetApi from "../../../Hooks/useGetApi";

export default function Similar({ movieId }) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar`

    return (
        <>
            <HorizontalCard count={4} title={'Similar Movies'} url={url} />
        </>
    )
}
