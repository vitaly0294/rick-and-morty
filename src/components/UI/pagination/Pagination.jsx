import React from 'react';
import './pagination.scss';

const Pagination = ({pageArr, changePage, currentPage}) => {

  return (
    <div className='pages'>
      {pageArr.map(page => 
        <span
          onClick={() => changePage(page)}
          key={page} 
          className={page === currentPage ? 'page page_active' : 'page'}
        >{page}</span>
      )}
    </div>
  );
};

export default Pagination;