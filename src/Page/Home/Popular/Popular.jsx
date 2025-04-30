import HorizontalCard from "../../../components/Card/HorizontalCard";

export default function PopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US`;

    return (
        <div className="mt-7">
            <HorizontalCard title={'Popular Movies'} url={url} />
        </div>
    )
}
