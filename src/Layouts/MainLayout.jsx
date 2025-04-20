import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
