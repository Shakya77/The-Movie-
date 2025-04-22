import useGetApi from "../../../Hooks/useGetApi";

export default function WatchProviders({ movieId }) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`
    const { data, loading, error } = useGetApi(url);

    if (loading) return <p className="text-gray-500">Loading providers...</p>;
    if (error) return <p className="text-red-500">Error loading providers.</p>;

    const usProviders = data?.results?.US;
    console.log(usProviders);
    const { buy = [], rent = [] } = usProviders || {};
    return (
        <div className="mt-4">
            {buy.length === 0 && rent.length === 0 ? (
                <p className="text-gray-500">No watch providers available for purchase or rent in the US.</p>
            ) : (
                <>
                    {buy.length > 0 && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Buy</h3>
                            <div className="flex flex-wrap gap-4 mt-2">
                                {buy.map((provider) => (
                                    <div key={provider.provider_id} className="flex flex-col items-center w-20">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                            alt={provider.provider_name}
                                            className="h-10 object-contain"
                                        />
                                        <span className="text-xs mt-1 text-center">{provider.provider_name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {rent.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold">Rent</h3>
                            <div className="flex flex-wrap gap-4 mt-2">
                                {rent.map((provider) => (
                                    <div key={provider.provider_id} className="flex flex-col items-center w-20">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                            alt={provider.provider_name}
                                            className="h-10 object-contain"
                                        />
                                        <span className="text-xs mt-1 text-center">{provider.provider_name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
