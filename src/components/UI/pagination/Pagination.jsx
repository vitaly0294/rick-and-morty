/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './pagination.scss';

function Pagination({ pageArr, changePage, currentPage }) {
  return (
    <div className="pages">
      {pageArr.map((page) => (
        <span
          onClick={() => changePage(page)}
          key={page}
          className={page === currentPage ? 'page page_active' : 'page'}
        >
          {page}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
