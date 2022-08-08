/* eslint-disable react/prop-types */
import React from 'react';
import './episodesFilterList.scss';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

function EpisodesFilterList({ filter, setFilter }) {
  return (
    <div className="wrap">
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка"
        options={[
          { value: 'air_date', name: 'По дате выхода' },
          { value: 'name', name: 'По названию' },
        ]}
      />
    </div>
  );
}

export default EpisodesFilterList;
