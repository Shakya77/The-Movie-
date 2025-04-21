import React, { useEffect } from 'react'
import MainLayout from '../../Layouts/MainLayout'

export default function Random() {
    useEffect(() => {
        document.title = `Random Movie | The Movie House`;
    }, []);


    return (
        <MainLayout>
            <div className="">
                <button>Click to get random movie</button>
            </div>
        </MainLayout>
    )
}
