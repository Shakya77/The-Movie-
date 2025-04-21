import { useParams } from "react-router-dom";
import useGetApi from "../../../Hooks/useGetApi";

export default function CasterDetails() {
    const { casterId } = useParams();
    const personUrl = `https://api.themoviedb.org/3/person/${casterId}`;
    const creditsUrl = `https://api.themoviedb.org/3/person/${casterId}/combined_credits`;

    const { data: personData, loading: personLoading, error: personError } = useGetApi(personUrl);
    const { data: creditsData, loading: creditsLoading, error: creditsError } = useGetApi(creditsUrl);

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    if (personLoading || creditsLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (personError || creditsError) {
        return (
            <div className="text-center text-red-500 text-lg mt-8">
                Error: {personError || creditsError}
            </div>
        );
    }

    if (!personData || !creditsData) {
        return (
            <div className="text-center text-gray-500 text-lg mt-8">
                No details found.
            </div>
        );
    }

    const { name, profile_path, birthday, place_of_birth, biography } = personData;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            {/* Profile Image & Info */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <img
                        src={profile_path ? `${imageBaseUrl}${profile_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                        alt={name}
                        className="w-full rounded-lg shadow-md"
                    />
                    <h1 className="text-2xl font-bold mb-6 text-center mt-3">{name}</h1>
                </div>

                <div className="w-full md:w-2/3">
                    <h2 className="text-xl font-semibold mb-2">Biography</h2>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">{biography || "No biography available."}</p>

                    <div className="text-sm text-gray-600 space-y-2">
                        <p><span className="font-medium text-black">Birthday:</span> {birthday || "Unknown"}</p>
                        <p><span className="font-medium text-black">Place of Birth:</span> {place_of_birth || "Unknown"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
