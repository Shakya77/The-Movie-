
export default function SearchCard({ image, title, description, released, runtime, genre, rating }) {
    // Format runtime to hours and minutes
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

    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all hover:shadow-md">
            <div className="flex flex-col sm:flex-row">
                {/* Standard img tag instead of Next.js Image */}
                <div className="h-[200px] sm:h-[225px] sm:w-[150px] flex-shrink-0 relative">
                    {image ? (
                        <img
                            src={image || "/placeholder.svg"}
                            alt={title || "Movie poster"}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-500 dark:text-gray-400">No image</span>
                        </div>
                    )}
                </div>

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
                                {typeof genre === "string" ? (
                                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                                        {genre}
                                    </span>
                                ) : Array.isArray(genre) ? (
                                    genre.slice(0, 3).map((g, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                                        >
                                            {g}
                                        </span>
                                    ))
                                ) : null}
                            </div>
                        )}

                        {description && <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 pt-1">{description}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}
