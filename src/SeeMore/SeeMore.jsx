import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import VerticalCard from '../components/Card/VerticalCard';

export default function SeeMore() {
    const { title } = useParams();
    const location = useLocation();
    const { url } = location.state;

    return (
        <MainLayout>
            <div className="container mx-auto p-4 ">
                <h1 className="text-3xl font-bold text-center mt-6">{title}</h1>
                <VerticalCard url={url} />
            </div>
        </MainLayout>

    )
}
