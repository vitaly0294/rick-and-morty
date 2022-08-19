import { useState, useEffect } from 'react';

const usePagination = (
  setData,
  infoPage,
  setLinkParam,
  choicePagination,
  endlessPagination,
  initialLoadPage = true,
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollLoading, setScrollLoading] = useState(false);

  const scrollHandler = (e) => {
    const { scrollHeight, scrollTop } = e.target.documentElement;
    const { innerHeight } = window;
    if (scrollHeight - (scrollTop + innerHeight) === 0) setScrollLoading(true);
  };

  useEffect(() => {
    if (currentPage < infoPage.info.pages && scrollLoading) {
      setCurrentPage(currentPage + 1);
      setLinkParam({ page: currentPage + 1 });
    }
  }, [scrollLoading]);

  useEffect(() => {
    if (initialLoadPage) {
      setData([]);
      setCurrentPage(1);
      setLinkParam({ page: 1 });
    }

    if (choicePagination === endlessPagination) document.addEventListener('scroll', scrollHandler);

    return () => {
      if (choicePagination === endlessPagination) document.removeEventListener('scroll', scrollHandler);
    };
  }, [choicePagination]);
  return [currentPage, setCurrentPage, setScrollLoading];
};

export default usePagination;
