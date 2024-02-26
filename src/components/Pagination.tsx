import React from 'react';
import '../styles/pagination.css';
import { PaginationProps } from '../types/types';

/**
 * Ignore this section. Not being used in the project
 * @param param0 
 * @returns 
 */

const Pagination:React.FC<PaginationProps> = ({ numberOfPages, currentPage, setCurrentPage }) => {

    const handlePageChange = (e:any) => {
        const page = e.target.innerText;
        setCurrentPage(parseInt(page));
    }

    return (
        <div className='page-show'>
            <ul>
            {
                // Show the number of pages
                Array.from({length: numberOfPages}, (v, i) => i + 1).map((page, index) => {
                    return <li className={currentPage===page ? 'page-selected' : ''} onClick={handlePageChange}  key={index}>{page}</li>
                })
            }
            </ul>
        </div>
    )
}

export default Pagination
