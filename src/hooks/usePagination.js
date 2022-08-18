/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

export const usePagination = (setData, infoPage, setLinkParam) => {
  const [pagination, setPagination] = useState('page');
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollLoading, setScrollLoading] = useState(false);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setScrollLoading(true);
    }
  };

  useEffect(() => {
    if (currentPage < infoPage.info.pages && scrollLoading) {
      setCurrentPage(currentPage + 1);
      setLinkParam({ page: currentPage + 1 });
    }
  }, [scrollLoading]);

  useEffect(() => {
    setData([]);
    setCurrentPage(1);
    setLinkParam({ page: 1 });

    if (pagination === 'endless') {
      document.addEventListener('scroll', scrollHandler);
    }

    return () => {
      if (pagination === 'endless') {
        document.removeEventListener('scroll', scrollHandler);
      }
    };
  }, [pagination]);
  return [pagination, setPagination, currentPage, setCurrentPage, setScrollLoading];
};
