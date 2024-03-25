import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Pagination from '../components/Pagination';
import Modal from '../components/modal';
import { API_ALBUMS } from '../js/constants';

import PaginationCss from '../styles/modules/pagination.module.css';
import '../styles/album.module.css';

export default function Album() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const [showModal, setShowModal] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetch(API_ALBUMS)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => console.error("Erreur lors de la récupération des albums:", error));
    }, []);

    const fetchAlbumDetails = (albumId) => {
        fetch(`${API_ALBUMS}/${albumId}`)
            .then(response => response.json())
            .then(data => {
                setSelectedAlbum(data.album);
                setTracks(data.tracks);
                setShowModal(true);
            })
            .catch(error => console.error("Erreur lors de la récupération des détails de l'album:", error));
    };

    const playTrack = (trackIndex) => {
        setCurrentTrackIndex(trackIndex);
        setIsPlaying(true);
    };

    const stopTrack = () => {
        setCurrentTrackIndex(null);
        setIsPlaying(false);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModalWithAlbumDetails = (album) => {
        fetchAlbumDetails(album.id);
    };

    return (
        <>
            <div className={PaginationCss.pagination}>
                <Pagination totalItems={posts.length} itemsPerPage={postsPerPage} onChangePage={paginate} />
            </div>
            {currentPosts.map(post => (
                <div key={post.id} onClick={() => openModalWithAlbumDetails(post)}>
                    <Card title={post.name} cover={post.cover} artist={post.artist_id} album={true} image={true} />
                </div>
            ))}
            {showModal && (
                <Modal toggleModal={() => { setShowModal(false); stopTrack(); }}>
                    <h2>{selectedAlbum.name}</h2>
                    <p>{selectedAlbum.description}</p>
                    {tracks.map((track, index) => (
                        <div key={track.id}>
                            <p>{track.name}</p>
                            <button onClick={() => isPlaying && currentTrackIndex === index ? stopTrack() : playTrack(index)}>
                                {isPlaying && currentTrackIndex === index ? 'Stop' : 'Lire'}
                            </button>
                            {isPlaying && currentTrackIndex === index &&
                                <audio controls autoPlay>
                                    <source src={track.mp3} type="audio/mpeg" />
                                    Votre moteur ne supporte pas l'élément audio.
                                </audio>
                            }
                        </div>
                    ))}
                </Modal>
            )}
        </>
    );
}