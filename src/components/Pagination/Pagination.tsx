import { FC } from 'react'

import { IPagination } from '../../types/interfaces/interfaces';

import './Pagination.scss';

export const Pagination: FC<IPagination> = ({showsPerPage, totalShows, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalShows / showsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className='pagination'>
        {pageNumbers.map((number) => (
            <li onClick={() => paginate(number)} key={number} className={currentPage == number ? "pagination-item active" : "pagination-item"}>
                <p className={currentPage == number ? "pagination-link active" : "pagination-link"}>{number}</p>
            </li>
        ))}
    </div>
  )
}
