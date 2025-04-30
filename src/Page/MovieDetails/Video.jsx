import React, { useState } from 'react';
import useGetApi from '../../Hooks/useGetApi';

export default function Video({ movieId }) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const { data, loading, error } = useGetApi(url);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const trailers =
        data?.results?.filter(
            (video) => video.site === 'YouTube' && video.type === 'Trailer'
        ) || [];
    return (
        <div className="flex flex-col items-center text-center p-5 font-sans">
            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}
            {error && <div className="text-red-500 text-lg font-bold">Error: {error}</div>}

            {!loading && !error && trailers && trailers.length > 0 && (
                <>
                    <h1 className="text-2xl font-bold mb-4">Trailers</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
                        {trailers.map(video => (
                            <div
                                key={video.id}
                                className="cursor-pointer relative group"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                                    alt={video.name}
                                    className="w-full rounded-xl shadow-lg transition-transform transform group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedVideo(null)}
                >
                    {/* Close Button outside of modal content */}
                    <button
                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-xl px-3 py-2 text-sm z-10 hover:bg-opacity-70"
                        onClick={() => setSelectedVideo(null)}
                    >
                        ✕
                    </button>

                    <div
                        className="bg-white rounded-xl overflow-hidden w-[100%] max-w-7xl relative"
                        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
                    >
                        <div className="w-full h-[80vh] p-0 m-0 bg-black ">
                            <iframe
                                className="w-full h-full block"
                                src={`https://www.youtube.com/embed/${selectedVideo.key}?autoplay=1`}
                                title={selectedVideo.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
