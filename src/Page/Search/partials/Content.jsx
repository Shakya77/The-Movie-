import useGetApi from "../../../Hooks/useGetApi"
import SearchCard from "../../../components/Card/partials/SearchCard"

export default function Content({ keyword, type, setOpen }) {
    // Use the keyword as the search term
    const search = keyword || ""

    const url = `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1`
    const { data, error, isLoading } = useGetApi(url)

    // Handle loading state with skeleton loaders
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
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
        <div className="mx-auto py-4 max-h-96 overflow-y-scroll">
            <h2 className="text-xl font-semibold mb-4">Search Results for "{search}"</h2>
            <div className="grid gap-4 md:grid-cols-1">
                {data.results.map((item, index) => (
                    <SearchCard
                        key={item.id || index}
                        id={item.id}
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

