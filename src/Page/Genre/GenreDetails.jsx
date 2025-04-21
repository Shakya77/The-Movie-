import React from 'react'
import { useParams } from 'react-router-dom';

export default function GenreDetails() {

    const genreId = useParams();
    console.log(genreId);

    return (
        <div>

        </div>
    )
}
