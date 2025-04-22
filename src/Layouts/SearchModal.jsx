// components/SearchModal.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ open, setOpen }) => {
    const [keyword, setKeyword] = useState();
    const navigate = useNavigate();
    if (!open) return null;
    const handleClose = () => setOpen(false);

    console.log(keyword);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
        setOpen(false);
    }
    const handleSearch = () => {
        navigate("/search?keyword=" + keyword);
    };
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={handleClose}
        >
            <div
                className="bg-white rounded-xl shadow-lg w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Search</h2>
                    <button
                        className="text-gray-500 hover:text-gray-800"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => { setKeyword(e.target.value) }}
                        autoFocus
                    />
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Search</button>
                </form>
            </div>
        </div>
    );
};

export default SearchModal;
