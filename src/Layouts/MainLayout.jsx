import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
