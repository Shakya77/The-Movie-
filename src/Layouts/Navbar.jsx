import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar({ setOpen }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenWatchTime, setIsDropdownOpenWatchTime] = useState(false);
    const { logout } = useAuth();

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
        setIsDropdownOpenWatchTime(false);
    };

    const toggleDropdownWatchTime = () => {
        setIsDropdownOpenWatchTime((prev) => !prev);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/movies" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movie House</span>
                </NavLink>
                <div onClick={() => { setOpen(true) }} className="text-white text-sm border cursor-pointer border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1 bg-gray-100 dark:bg-gray-800">
                    CTRL + K to Search
                </div>
                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/movies" className={({ isActive }) =>
                                isActive
                                    ? 'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-600 md:dark:bg-transparent'
                                    : 'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500'
                            }>Movies</NavLink>
                        </li>

                        <li>
                            <NavLink to="/tvShows" className={({ isActive }) =>
                                isActive
                                    ? 'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-600 md:dark:bg-transparent'
                                    : 'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500'
                            }>Tv Shows</NavLink>
                        </li>

                        <li>
                            <NavLink to="/genre" className={({ isActive }) =>
                                isActive
                                    ? 'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-600 md:dark:bg-transparent'
                                    : 'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500'
                            }>Genre</NavLink>
                        </li>

                        <li>
                            <NavLink to="/random" className={({ isActive }) =>
                                isActive
                                    ? 'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-600 md:dark:bg-transparent'
                                    : 'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500'
                            }>Random</NavLink>
                        </li>

                        <li className="relative">
                            <button
                                onClick={toggleDropdownWatchTime}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                                Watch Time
                                <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {isDropdownOpenWatchTime && (
                                <div className="absolute z-10 mt-2 w-32 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <NavLink to="/watchtime/tvShows" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tv Show</NavLink>
                                        </li>
                                    </ul>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <NavLink to="/watchtime/movies" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Movie</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                            >
                                Account
                                <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-32 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <NavLink to="/watchlist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Watch List</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/favorite" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Favorite</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/addMovie" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Movie</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/showMovie" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show Movie</NavLink>
                                        </li>
                                        <li>
                                            <button onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}
