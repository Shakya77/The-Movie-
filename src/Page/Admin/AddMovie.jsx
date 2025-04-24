import { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";

export default function AddMovie() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/movies/createMovies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <MainLayout>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        className="mt-1 block w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </form>
        </MainLayout>

    );
}
