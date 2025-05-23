import { useState } from "react"
import { Icon } from "@iconify/react"
import Content from "../../Search/partials/Content"
import { useNavigate } from "react-router-dom"

export default function SearchBar({ content, setOpen }) {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [type, setType] = useState("movie")

    const handleSearch = (e) => {
        e.preventDefault()
        if (content === false) {
            if (search.trim()) {
                navigate("/search", { state: { search, type } })
            }
        }
    }

    if (content === false) {
        return (
            <>
                <form onSubmit={handleSearch} className="relative">
                    <div className="flex items-center bg-[#1e293b] border border-gray-700/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                        {/* Search Icon Button */}
                        <button
                            type="submit"
                            className="pl-4 text-gray-400 hover:text-blue-500 transition duration-200 flex items-center justify-center h-full"
                            disabled={!search.trim()}
                            aria-label="Search"
                        >
                            <Icon icon="iconamoon:search-bold" className="text-xl" />
                        </button>

                        {/* Input Field */}
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={`Search ${type === "movie" ? "movies" : "TV shows"}...`}
                            className="w-full px-3 py-3.5 text-white placeholder-gray-400 bg-transparent focus:outline-none"
                            aria-label="Search"
                            autoFocus
                        />

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-700/50 mx-2"></div>

                        {/* Type Selector */}
                        <div className="relative mr-2 pr-3">
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="appearance-none bg-transparent text-gray-300 focus:outline-none text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-gray-700/30 transition duration-200"
                                aria-label="Select Type"
                            >
                                <option value="movie" className="bg-[#1e293b] text-white">
                                    Movie
                                </option>
                                <option value="tv" className="bg-[#1e293b] text-white">
                                    TV Show
                                </option>
                            </select>
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <Icon icon="heroicons:chevron-down" className="text-sm" />
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    } else {
        return (
            <>
                <div className=" bg-white rounded-lg shadow-lg">
                    <form onSubmit={handleSearch} className="relative">
                        <div className="flex items-center bg-[#1e293b] border border-gray-700/50 shadow-lg rounded-t-lg overflow-hidden transition-all duration-300 hover:border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                            {/* Search Icon Button */}
                            <button
                                type="submit"
                                className="pl-4 text-gray-400 hover:text-blue-500 transition duration-200 flex items-center justify-center h-full"
                                disabled={!search.trim()}
                                aria-label="Search"
                            >
                                <Icon icon="iconamoon:search-bold" className="text-xl" />
                            </button>

                            {/* Input Field */}
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={`Search ${type === "movie" ? "movies" : "TV shows"}...`}
                                className="w-full px-3 py-3.5 text-white placeholder-gray-400 bg-transparent focus:outline-none"
                                aria-label="Search"
                                autoFocus
                            />

                            {/* Separator */}
                            <div className="h-6 w-px bg-gray-700/50 mx-2"></div>

                            {/* Type Selector */}
                            <div className="relative mr-2 pr-3">
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="appearance-none bg-transparent text-gray-300 focus:outline-none text-sm cursor-pointer px-3 py-2 rounded-md hover:bg-gray-700/30 transition duration-200"
                                    aria-label="Select Type"
                                >
                                    <option value="movie" className="bg-[#1e293b] text-white">
                                        Movie
                                    </option>
                                    <option value="tv" className="bg-[#1e293b] text-white">
                                        TV Show
                                    </option>
                                </select>
                                <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <Icon icon="heroicons:chevron-down" className="text-sm" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <Content keyword={search.trim()} setOpen={setOpen} type={type} />
                </div>
            </>
        )
    }
}
