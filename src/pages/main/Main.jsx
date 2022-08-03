import React, { useEffect, useState } from 'react';
import './main.scss';
import EpisodeList from '../../components/episodeList/EpisodeList';
import EpisodesFilterList from '../../components/episodesFilterList/EpisodesFilterList';
import EpisodeService from '../../API/EpisodeService';
import Preloader from '../../components/UI/preloader/Preloader';
import { useEpisodes } from '../../hooks/useEpisodes';
import { useFetching } from '../../hooks/useFetching';
import { getPageArr } from '../../utils/pages';
import Pagination from '../../components/UI/pagination/Pagination';

const Main = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndSerchedEpisodes = useEpisodes(episodes, filter.sort, filter.query);

  const [fetchEpisodes, isLoading, error] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPage);
    setEpisodes(response.data.results);
    setInfoPage(response.data.info);
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [infoPage, setInfoPage] = useState({});
  const [linkPage, setLinkPage] = useState('https://rickandmortyapi.com/api/episode');
  const pageArr = getPageArr(infoPage.pages);

  useEffect(() => {
    fetchEpisodes();
  }, [linkPage]);

  const changePage = (page) => {
    setCurrentPage(page);
    setLinkPage(`https://rickandmortyapi.com/api/episode?page=${page}`);
  }

  return (
    <div>
      <EpisodesFilterList filter={filter} setFilter={setFilter}/>

      {error &&
        <h1>Произошла ошибка {error}</h1>
      }

      {isLoading
        ? <Preloader isLoading={isLoading}/>
        : <EpisodeList episodes={sortedAndSerchedEpisodes} title={'Список эпизодов'}/>
      }

      <Pagination pageArr={pageArr} changePage={changePage} currentPage={currentPage}/>
    </div>
  );
};

export default Main;