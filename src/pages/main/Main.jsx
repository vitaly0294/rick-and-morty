/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './main.module.scss';

import MySelect from '../../components/UI/select/MySelect';
import Error from '../../components/error/Error';
import EpisodeList from '../../components/episodeList/EpisodeList';
import EpisodesFilterList from '../../components/episodesFilterList/EpisodesFilterList';
import Preloader from '../../components/UI/preloader/Preloader';
import { useEpisodes } from '../../hooks/useEpisodes';
import { getPageArr, getRandomKey } from '../../utils/pages';
import Pagination from '../../components/UI/pagination/Pagination';
import { linkApiEpisode } from '../../constants';

import {
  getPage, getPageMain, getPageMainFilter, getPageMainPag,
} from '../../actions/main';
import { setPageClean } from '../../reducers/mainReducer';

function Main() {
  const dispatch = useDispatch();
  const infoPage = useSelector((state) => state.mainReducer);
  const [data, setData] = useState([]);

  const [pagination, setPagination] = useState('page');

  const [currentPage, setCurrentPage] = useState(1);
  const [linkParam, setLinkParam] = useState({ page: currentPage });

  useEffect(() => {
    dispatch(getPage(linkApiEpisode, linkParam));
  }, [linkParam]);

  useEffect(() => {
    if (pagination === 'page') {
      setData(infoPage.results);
    }
  }, [infoPage.results]);

  // const [a, setA] = useState(false);

  // const a = useCallback(() => {

  // }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  // const pageArr = getPageArr(infoPage.info.pages);
  // console.log('a', a);

  // useEffect(() => {
  //   if (pagination === 'page') {
  //     dispatch(getPageMain(linkApiEpisode, linkPageParam));
  //   } else {
  //     dispatch(getPageMainPag(linkApiEpisode, linkPageParam));
  //     setA(false);
  //   }
  //   console.log(111);
  // }, [linkPageParam]);

  // const changePage = (page) => {
  //   setCurrentPage(page);
  //   setLinkPageParam({ ...linkPageParam, page });
  // };

  // const scrollHandler = (e) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) === 0) {
  //     if (a !== true) {
  //       setA(true);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   console.log(44444);
  //   if (pagination === 'endless' && currentPage <= infoPage.info.pages) {
  //     changePage(currentPage + 1);
  //     console.log('currentPage: ', currentPage);
  //   }
  // }, [a]);

  // useEffect(() => {
  //   if (pagination === 'endless') {
  //     document.addEventListener('scroll', scrollHandler);
  //   }

  //   if (currentPage !== 1) {
  //     dispatch(setPageClean());
  //     changePage(1);
  //   }

  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [pagination]);

  // console.log('infoPage: ', infoPage);
  // console.log('infoPage.errors.length: ', infoPage.errors.length);
  // console.log('linkPageParam: ', linkPageParam);

  // const [filter, setFilter] = useState({ sort: '', query: '' });
  // const sortedAndSerchedEpisodes = useEpisodes(infoPage.results, filter.sort, filter.query);

  // useEffect(() => {
  //   if (filter.query === '') dispatch(getPageMain(linkApiEpisode, linkPageParam));
  //   if (filter.query !== '') dispatch(getPageMainFilter(linkApiEpisode, linkPageParam));
  // }, [linkPageParam]);

  // useEffect(() => {
  //   setLinkPageParam({ ...linkPageParam, name: filter.query });
  // }, [filter]);

  return (
    <div>
      <div>
        <MySelect
          name="pagination"
          value={pagination}
          onChange={(value) => setPagination(value)}
          options={[
            { value: 'page', name: 'Постраничная' },
            { value: 'endless', name: 'Бесконечная' },
          ]}
        />
      </div>

      <Error errors={infoPage.errors} />
      {infoPage.isLoading
        ? <Preloader />
        : (
          <>
            <EpisodeList episodes={data} title="Список эпизодов" sortSeason />
            <Pagination
              pages={infoPage.info.pages}
              nextLink={infoPage.info.next}
              prevLink={infoPage.info.prev}
              linkParam={linkParam}
              setLinkParam={setLinkParam}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            {/* {pagination === 'page'
              ? <Pagination pageArr={pageArr} changePage={changePage} currentPage={currentPage} />
              : ''} */}
          </>
        )}

      {/* <EpisodesFilterList filter={filter} setFilter={setFilter} /> */}
    </div>
  );
}

export default Main;
