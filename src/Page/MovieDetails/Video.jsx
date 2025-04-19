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
            {loading && <div className="text-red-500 text-lg font-bold">Loading...</div>}
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
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                                    <span className="text-white text-xl font-semibold">▶ Play</span>
                                </div>
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
                    <div
                        className="bg-white rounded-xl overflow-hidden w-[90%] max-w-3xl relative"
                        onClick={e => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        <button
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-sm"
                            onClick={() => setSelectedVideo(null)}
                        >
                            ✕
                        </button>
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
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
