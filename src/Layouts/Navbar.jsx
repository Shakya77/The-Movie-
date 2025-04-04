import icon from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex items-center">
                <div>
                    <img src={icon} alt="Website Logo" className="h-16 w-auto" />
                </div>

                <div className="ml-auto">
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
