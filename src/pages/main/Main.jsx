import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './main.scss';
import EpisodeList from '../../components/episodeList/EpisodeList';
import EpisodesFilterList from '../../components/episodesFilterList/EpisodesFilterList';
import Preloader from '../../components/UI/preloader/Preloader';
import { useEpisodes } from '../../hooks/useEpisodes';
import { getPageArr } from '../../utils/pages';
import Pagination from '../../components/UI/pagination/Pagination';
import { linkApiEpisode } from '../../constants';

import { getPageMain } from '../../actions/main';

const Main = () => {
  const dispatch = useDispatch();
  const infoPage = useSelector(state => state.mainReducer);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndSerchedEpisodes = useEpisodes(infoPage.results, filter.sort, filter.query);

  const [currentPage, setCurrentPage] = useState(1);
  const [linkPageParam, setLinkPageParam] = useState({});
  const pageArr = getPageArr(infoPage.info.pages);

  useEffect(() => {
    dispatch(getPageMain(linkApiEpisode, linkPageParam));
  }, [linkPageParam]);

  const changePage = (page) => {
    setCurrentPage(page);
    setLinkPageParam({...linkPageParam, page: page});
  }

  return (
    <div>
      <EpisodesFilterList filter={filter} setFilter={setFilter}/>

      {infoPage.error
        ? <h1>Произошла ошибка {error}</h1>
        : ''
      }

      {infoPage.isLoading
        ? <Preloader/>
        : <>
          <EpisodeList episodes={sortedAndSerchedEpisodes} title={'Список эпизодов'}/>
          <Pagination pageArr={pageArr} changePage={changePage} currentPage={currentPage}/>
        </>
      }
    </div>
  );
};

export default Main;