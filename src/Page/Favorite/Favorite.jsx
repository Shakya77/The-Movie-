import { useEffect } from 'react';
import MainLayout from '../../Layouts/MainLayout'

export default function Favorite() {
    useEffect(() => {
        document.title = "Faviorite | The Movie House";
    }, []);

    return (
        <MainLayout>

            <div>
                this is the favoirite section
            </div>
        </MainLayout>

    )
}
