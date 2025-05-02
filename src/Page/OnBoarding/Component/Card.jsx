import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import cardCover from '../../../assets/onboardcover.jpg';
import SearchBar from "./SearchBar";

export default function Card() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/movies");
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="h-1/2 flex flex-col sm:flex-row max-w-5xl rounded-none sm:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] text-white">
                {/* Left content */}
                <div className="flex-1 p-10 flex flex-col justify-center ">
                    {/* Header */}
                    <div className="mb-6">
                        <button onClick={handleNavigate} className="hover:scale-105 transform transition-all duration-300 ease-in-out">
                            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Movie House
                            </h2>
                        </button>
                        <p className="text-sm font-medium mt-4 leading-relaxed text-gray-300">
                            A dynamic movie platform that uses the TMDB API to let users search, explore, and view details of movies and TV shows. Features include trending lists, genre filtering, and detailed movie pages with trailers and cast info.
                        </p>
                    </div>
                    {/* Search Bar */}
                    <div className="mb-8">
                        <SearchBar content={false} />
                    </div>
                    {/* View Full Site Button */}
                    <div
                        onClick={handleNavigate}
                        className="flex items-center justify-center gap-2 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-3 rounded-xl hover:scale-105 transition-transform cursor-pointer "
                    >
                        <span>View Full Site</span>
                        <Icon icon="icons8:right-round" className="text-white text-2xl" />
                    </div>
                </div>
                {/* Right side image with overlay gradient */}
                <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
                    <img
                        src={cardCover}
                        alt="Card Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/80 to-transparent"></div>
                </div>
            </div>
        </div >
    );
}
