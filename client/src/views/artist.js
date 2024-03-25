import Pagination from '../components/Pagination';
import Card from '../components/card';
import { API_ARTISTS } from '../js/constants';
import { useState, useEffect } from 'react';

import PaginationCss from '../styles/modules/pagination.module.css';

export default function Artist() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    useEffect(() => {
        fetch(API_ARTISTS)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => console.error("Erreur lors de la récupération des albums:", error));
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className={PaginationCss.pagination}>
                <Pagination totalItems={posts.length} itemsPerPage={postsPerPage} onChangePage={paginate} />
            </div>
            {currentPosts.map(post => (
                <Card key={post.id} cover={post.photo} artist={post.name} image={true} />
            ))}
        </>
    );
}