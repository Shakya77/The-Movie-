import useGetApi from "../../../Hooks/useGetApi"
import SearchCard from "../../../components/Card/partials/SearchCard"

export default function Content({ keyword, type = "movie" ,setOpen}) {
    // Use the keyword as the search term
    const search = keyword || ""

    const url = `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1`
    const { data, error, isLoading } = useGetApi(url)

    // Handle loading state with skeleton loaders
    if (isLoading) {
        return (
            <div className="container mx-auto py-4">
                <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-4"></div>
                <div className="grid gap-4 md:grid-cols-2">
                    {[...Array(4)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            </div>
        )
    }

    // Handle error state
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <p className="text-gray-600 dark:text-gray-400">Error loading results. Please try again.</p>
            </div>
        )
    }

    // Handle no results or data not yet available
    if (!data || !data.results || data.results.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <p className="text-gray-600 dark:text-gray-400">No results found for "{search}"</p>
            </div>
        )
    }

    return (
        <div className="mx-auto py-4">
            <h2 className="text-xl font-semibold mb-4">Search Results for "{search}"</h2>
            <div className="grid gap-4 md:grid-cols-1">
                {data.results.map((item, index) => (
                    <SearchCard
                        key={item.id || index}
                        id={item.id}
                        image={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : null}
                        title={item.title || item.name}
                        description={item.overview}
                        released={item.release_date || item.first_air_date}
                        runtime={item.runtime}
                        genre={item.genre_ids} // Note: These are IDs, you might need to map them to actual genre names
                        rating={item.vote_average}
                        setOpen={setOpen}
                    />
                ))}
            </div>
        </div>
    )
}

// Skeleton loader component that mimics the SearchCard structure using Tailwind CSS
function SkeletonCard() {
    return (
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row">
                {/* Poster placeholder */}
                <div className="bg-gray-200 dark:bg-gray-700 h-[200px] sm:h-auto sm:w-[150px] flex-shrink-0"></div>

                {/* Content placeholder */}
                <div className="p-4 flex-1 space-y-3">
                    {/* Title and rating */}
                    <div className="flex items-start justify-between">
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-md w-10"></div>
                    </div>

                    {/* Year and runtime */}
                    <div className="flex gap-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-16"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-16"></div>
                    </div>

                    {/* Genre badges */}
                    <div className="flex gap-1">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                    </div>

                    {/* Description lines */}
                    <div className="space-y-1.5 pt-1">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-4/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
