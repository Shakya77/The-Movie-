import { useNavigate } from "react-router-dom"
import genreList from "../../../../MovieGenre.json"

export default function SearchCard({ id, title, description, released, runtime, genre, rating, setOpen }) {
    // Format runtime to hours and minutes
    const navigate = useNavigate()
    const formatRuntime = (minutes) => {
        if (!minutes) return "N/A"
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return `${hours}h ${mins}m`
    }

    // Format release date
    const formatReleaseDate = (date) => {
        if (!date) return "N/A"
        return new Date(date).getFullYear()
    }

    const handleClick = (id) => {
        setOpen(false);
        navigate(`/movie/details/${id}`)
    }

    const genreMap = Object.fromEntries(
        genreList.genres.map(g => [g.id, g.name])
    );

    return (
        <div className="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all hover:shadow-md" onClick={() => { handleClick(id) }}>
            <div className="flex flex-col sm:flex-row">
                <div className="p-4 flex-1">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-lg line-clamp-2">{title || "Untitled"}</h3>
                            {rating && (
                                <div className="flex items-center gap-1 text-amber-500">
                                    <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                            {released && <span>{formatReleaseDate(released)}</span>}
                            {released && runtime && <span>•</span>}
                            {runtime && <span>{formatRuntime(runtime)}</span>}
                        </div>

                        {genre && (
                            <div className="flex flex-wrap gap-1 pt-1">
                                {
                                    genre.map((g, i) => (
                                        <span key={i}
                                            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                                        >
                                            {genreMap[g]}
                                        </span>
                                    ))
                                }
                            </div>
                        )}

                        {description && <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 pt-1">{description}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
