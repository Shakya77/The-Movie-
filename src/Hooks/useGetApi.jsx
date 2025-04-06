import { useEffect, useState } from "react";

export default function useGetApi(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Store the error message or object

    const fetchData = async () => {
        try {
            const myHeaders = new Headers();
            const apiKey = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM5ODVhNjdhMDY1Y2VkNTVjZDE4MWU2NzI3OWE0ZSIsIm5iZiI6MTc0MzQyOTMyNS40Nywic3ViIjoiNjdlYTllY2Q2MjIzNWM2NTgxYzZjMzgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IhS1gQ-lQAVT5IyEOjklJH3qxfCA_U1joWRd82yOVEE";
            myHeaders.append("Authorization", apiKey);
            myHeaders.append("Content-Type", "application/json");

            const options = {
                method: 'GET',
                headers: myHeaders,
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setData(data);
            console.log(response)
        } catch (error) {
            setError(error.message || 'Something went wrong');
            // console.log(error)

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, fetchData };
}
