import HorizontalCard from "../../../components/Card/HorizontalCard";

export default function PopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    
    return (
        <div className="mt-3">
            <HorizontalCard title={'Popular Movies'} url={url} />
        </div>
    )
}
