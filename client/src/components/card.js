import { useState, useEffect } from 'react';

import { API_ARTISTS } from '../js/constants.js';
import card from '../styles/modules/card.module.css';

export default function Card({ title, cover, artist, album, image, name }) {
    const [artistName, setArtistName] = useState('');

    useEffect(() => {
        if (album) {
            fetch(`${API_ARTISTS}/${artist}`)
                .then(response => response.json())
                .then(data => {
                    setArtistName(data.name);
                })
                .catch(error => console.error("Erreur lors de la récupération de l'artiste:", error));
        }
    }, [artist, album]);

    return (
        <div className={card.card} >
            {image && (<img src={cover} alt={title} />)}
            {album && (<div className={card.albumName}>Album : {title}</div>)}
            <div className={card.albumName}>{name ? name : 'Artist'} : {album ? artistName : artist}</div>
        </div>
    );
}
