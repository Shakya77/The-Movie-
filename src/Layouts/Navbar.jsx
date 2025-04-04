import icon from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex items-center">
                <div>
                    <img src={icon} alt="" className='h-16 w-auto' />
                </div>
                <div className="ml-auto">
                    <ul className="flex space-x-4">
                        <li><Link to={'/'} className="hover:text-gray-300">Home</Link></li>
                        <li><Link className="hover:text-gray-300">Movies</Link></li>
                        <li><Link className="hover:text-gray-300">TV Series</Link></li>
                        <li><Link className="hover:text-gray-300">Most Popular</Link></li>
                        <li><Link className="hover:text-gray-300">Top Airing</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
