import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './main.module.scss';

import usePagination from '../../hooks/usePagination';

import { getPage } from '../../actions/main';

import MySelect from '../../components/UI/select/MySelect';
import Error from '../../components/error/Error';
import EpisodeList from '../../components/episodeList/EpisodeList';
import Preloader from '../../components/UI/preloader/Preloader';
import Pagination from '../../components/UI/pagination/Pagination';
import MyInput from '../../components/UI/input/MyInput';

import { linkApiEpisode, endlessPagination, pagePagination } from '../../constants';

function Main() {
  const dispatch = useDispatch();
  const infoPage = useSelector((state) => state.mainReducer);

  const [choicePagination, setChoicePagination] = useState(pagePagination);
  const [data, setData] = useState([]);
  const [linkParam, setLinkParam] = useState({ page: 1 });
  const initialLoadPage = false;
  const [
    currentPage,
    setCurrentPage,
    setScrollLoading,
  ] = usePagination(
    setData,
    infoPage,
    setLinkParam,
    choicePagination,
    endlessPagination,
    initialLoadPage,
  );
  const [search, setSearch] = useState({ name: '' });
  const [checkError, setCheckError] = useState(true);

  useEffect(() => {
    dispatch(getPage(linkApiEpisode, linkParam, checkError));
  }, [linkParam]);

  useEffect(() => {
    if (choicePagination === pagePagination) setData(infoPage.results);
    if (choicePagination === endlessPagination) {
      setData([...data, ...infoPage.results]);
      setScrollLoading(false);
    }
  }, [infoPage.results]);

  useEffect(() => {
    setData([]);
    if (search.name === '') {
      setCurrentPage(1);
      setLinkParam({ page: 1 });
    }

    setCheckError(search.name === '');

    setLinkParam(search);
  }, [search]);

  useEffect(() => {
    setSearch({ name: '' });
  }, [choicePagination]);

  return (
    <div>
      <div className={style.selects}>
        <MySelect
          name="pagination"
          value={choicePagination}
          onChange={(value) => setChoicePagination(value)}
          options={[
            { value: pagePagination, name: 'Постраничная' },
            { value: endlessPagination, name: 'Бесконечная' },
          ]}
          nameSelect="Выбор типа пагинации"
        />
      </div>

      <div className={style.inputs}>
        <MyInput
          value={search.name}
          onChange={(e) => setSearch({ name: e.target.value })}
          placeholder="Поиск..."
        />
      </div>

      <Error errors={infoPage.errors} />

      <EpisodeList
        isLoading={infoPage.isLoading}
        episodes={data}
        title="Список эпизодов"
        sortSeason
      />

      {infoPage.isLoading && (
        <Preloader />
      )}

      {choicePagination === pagePagination && Boolean(infoPage.results.length) && (
        <Pagination
          pages={infoPage.info.pages}
          nextLink={infoPage.info.next}
          prevLink={infoPage.info.prev}
          linkParam={linkParam}
          setLinkParam={setLinkParam}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

    </div>
  );
}

export default Main;
