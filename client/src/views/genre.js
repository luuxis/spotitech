import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { API_GENRES } from '../js/constants';

export default function Genre() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(API_GENRES)
            .then(response => response.json())
            .then(data => {
                setGenres(data);
            })
            .catch(error => console.error("Erreur lors de la récupération des genres:", error));
    }, []);

    return (
        <>
            {genres.map(post => (
                <Card key={post.id} artist={post.name} image={false} name="Genre" />
            ))}
        </>
    );
}