/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './main.scss';

import Error from '../../components/error/Error';
import EpisodeList from '../../components/episodeList/EpisodeList';
import EpisodesFilterList from '../../components/episodesFilterList/EpisodesFilterList';
import Preloader from '../../components/UI/preloader/Preloader';
import { useEpisodes } from '../../hooks/useEpisodes';
import { getPageArr, getRandomKey } from '../../utils/pages';
import Pagination from '../../components/UI/pagination/Pagination';
import { linkApiEpisode } from '../../constants';

import { getPageMain, getPageMainFilter } from '../../actions/main';

function Main() {
  const [linkPageParam, setLinkPageParam] = useState({});

  const dispatch = useDispatch();
  const infoPage = useSelector((state) => state.mainReducer);

  useEffect(() => {
    dispatch(getPageMain(linkApiEpisode, linkPageParam));
  }, []);

  console.log('infoPage: ', infoPage);
  // console.log('infoPage.errors.length: ', infoPage.errors.length);
  // console.log('linkPageParam: ', linkPageParam);

  // const [filter, setFilter] = useState({ sort: '', query: '' });
  // const sortedAndSerchedEpisodes = useEpisodes(infoPage.results, filter.sort, filter.query);

  // const [currentPage, setCurrentPage] = useState(1);
  // const pageArr = getPageArr(infoPage.info.pages);

  // useEffect(() => {
  //   if (filter.query === '') dispatch(getPageMain(linkApiEpisode, linkPageParam));
  //   if (filter.query !== '') dispatch(getPageMainFilter(linkApiEpisode, linkPageParam));
  // }, [linkPageParam]);

  // useEffect(() => {
  //   setLinkPageParam({ ...linkPageParam, name: filter.query });
  // }, [filter]);

  // const changePage = (page) => {
  //   setCurrentPage(page);
  //   setLinkPageParam({ ...linkPageParam, page });
  // };

  return (
    <div>
      {/* <EpisodesFilterList filter={filter} setFilter={setFilter} /> */}

      <Error errors={infoPage.errors} />

      {infoPage.isLoading
        ? <Preloader />
        : (
          <EpisodeList episodes={infoPage.results} title="Список эпизодов" sort />
        )}

      {/* {infoPage.isLoading
        ? <Preloader />
        : (
          <>
            <EpisodeList episodes={sortedAndSerchedEpisodes} title="Список эпизодов" sort />
            <Pagination pageArr={pageArr} changePage={changePage} currentPage={currentPage} />
          </>
        )} */}
    </div>
  );
}

export default Main;
