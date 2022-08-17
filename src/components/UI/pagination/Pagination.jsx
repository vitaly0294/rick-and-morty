/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './pagination.scss';
import { getPageArr } from '../../../utils/pages';

function Pagination({ pages, linkParam, setLinkParam }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageArr = getPageArr(pages);

  const changePage = (page) => {
    setCurrentPage(page);
    setLinkParam({ ...linkParam, page });
  };

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
