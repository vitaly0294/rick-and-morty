import React from 'react';
import PropTypes from 'prop-types';
import style from './pagination.module.scss';
import { getPageArr } from '../../../utils/pages';

function Pagination({
  pages,
  linkParam,
  setLinkParam,
  prevLink,
  nextLink,
  currentPage,
  setCurrentPage,
}) {
  const pageArr = getPageArr(pages);

  const changePage = (page) => {
    setCurrentPage(page);
    setLinkParam({ ...linkParam, page });
  };

  return (
    <div className={style.pages}>

      <button
        type="button"
        onClick={prevLink && (() => changePage(currentPage - 1))}
        className={`${style.page} ${!prevLink && style.disabled}`}
      >
        🡄
      </button>

      {pageArr.map((page) => (
        <button
          type="button"
          onClick={() => page !== currentPage && changePage(page)}
          key={page}
          className={`${style.page} ${page === currentPage && style.active}`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={nextLink && (() => changePage(currentPage + 1))}
        className={`${style.page} ${!nextLink && style.disabled}`}
      >
        🡆
      </button>
    </div>
  );
}

Pagination.defaultProps = {
  pages: null,
  linkParam: {},
  setLinkParam: () => {},
  prevLink: null,
  nextLink: null,
  currentPage: 1,
  setCurrentPage: () => {},
};

Pagination.propTypes = {
  pages: PropTypes.number,
  linkParam: PropTypes.shape(),
  setLinkParam: PropTypes.func,
  prevLink: PropTypes.string,
  nextLink: PropTypes.string,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Pagination;
