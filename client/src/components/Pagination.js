import { useState } from 'react';
import PaginationCss from '../styles/modules/pagination.module.css';

const Pagination = ({ totalItems, itemsPerPage, onChangePage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Fonction pour changer de page
    const goToPage = (page) => {
        setCurrentPage(page);
        onChangePage(page);
    };

    // Calcul des boutons à afficher
    const getPagesToShow = () => {
        const pages = [];
        pages.push(currentPage); // Ajoute la page actuelle

        // Ajoute la page précédente et suivante si elles existent
        if (currentPage > 1) pages.unshift(currentPage - 1);
        if (currentPage < totalPages) pages.push(currentPage + 1);

        // Ajuste pour toujours montrer jusqu'à 4 boutons
        if (pages.length < 3) {
            if (pages[0] > 1) pages.unshift(pages[0] - 1); // Ajoute un bouton pour une page en moins
            else if (pages[pages.length - 1] < totalPages) pages.push(pages[pages.length - 1] + 1); // Ajoute un bouton pour une page en plus
        }

        return pages;
    };

    return (
        <>
            <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} className={PaginationCss.btn}>
                {'<'}
            </button>
            {getPagesToShow().map((page) => (
                <button key={page} disabled={page === currentPage} onClick={() => goToPage(page)} className={PaginationCss.btn}>
                    {page}
                </button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)} className={PaginationCss.btn}>
                {'>'}
            </button>
        </>
    );
};

export default Pagination;
