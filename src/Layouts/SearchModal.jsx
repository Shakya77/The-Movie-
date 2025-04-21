// components/SearchModal.jsx
import React from 'react';

const SearchModal = ({ open, setOpen }) => {
    if (!open) return null;

    const handleClose = () => setOpen(false);

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
                <input
                    type="text"
                    placeholder="Type to search..."
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default SearchModal;
