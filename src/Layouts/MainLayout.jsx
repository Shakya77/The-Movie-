import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import SearchModal from './SearchModal';

export default function MainLayout({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsModalOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <div className="min-h-screen flex flex-col">
            <Navbar setOpen={setIsModalOpen} />
            {children}
            <Footer />
            <SearchModal open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
    )
}
