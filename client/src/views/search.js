import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import Pagination from '../components/Pagination';
import { API_ARTISTS, API_ALBUMS } from '../js/constants';
import PaginationCss from '../styles/modules/pagination.module.css';
import SearchCss from '../styles/search.module.css';

export default function Search() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('artist');

    useEffect(() => {
        if (searchType === 'artist') {
            fetch(API_ARTISTS)
                .then(response => response.json())
                .then(data => {
                    setPosts(data);
                })
                .catch(error => console.error("Erreur lors de la récupération des artistes:", error));
        } else {
            fetch(API_ALBUMS)
                .then(response => response.json())
                .then(data => {
                    setPosts(data);
                })
                .catch(error => console.error("Erreur lors de la récupération des albums:", error));
        }
    }, [searchType]);

    const filteredPosts = posts.filter(post => post.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearch = () => {
        setSearchTerm('');
        setCurrentPage(1);
    };
    return (
        <>
            <div className={SearchCss.search}>
                <input
                    type="text"
                    placeholder={`Rechercher un ${searchType === 'artist' ? 'artiste' : 'album'}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                >
                    <option value="artist">Artiste</option>
                    <option value="album">Album</option>
                </select>
                <button onClick={handleSearch}>Rechercher</button>
            </div>
            <div className={PaginationCss.pagination}>
                <Pagination totalItems={filteredPosts.length} itemsPerPage={postsPerPage} onChangePage={paginate} />
            </div>
            {currentPosts.map(post => (
                <Card
                    key={post.id}
                    title={post.name}
                    cover={searchType === 'artist' ? post.photo : post.cover}
                    artist={searchType === 'artist' ? post.name : post.artist_id}
                    album={searchType === 'album'}
                    image={true}
                />
            ))}
        </>
    );
}