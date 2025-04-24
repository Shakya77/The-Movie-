import React, { useEffect, useState } from 'react'
import MainLayout from '../../../Layouts/MainLayout'

export default function ShowMovie() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const url = `http://localhost:3000/api/movies/`

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res = await fetch(url, {
                method: "GET",
            });
            const json = await res.json();
            setData(json.movieData);
            setIsLoading(false);
        }
        getData();
    }, [url])

    if (isLoading) return <p>Error: {isLoading}</p>;

    return (
        <MainLayout>
            <div className="flex justify-center my-4">
                <div>
                    {data.map((movie) => (
                        <div key={movie.id}>
                            <p>{movie.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}
