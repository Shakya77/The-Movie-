import { useEffect, useState } from "react";

export default function useGetApi(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Store the error message or object

    const fetchData = async () => {
        try {
            const myHeaders = new Headers();
            const token = import.meta.env.VITE_API_TOKEN;

            const apiKey = `Bearer ${token}`;
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
