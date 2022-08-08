/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './location.scss';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/UI/preloader/Preloader';
import CharacterList from '../../components/characterList/CharacterList';
import LocationItem from '../../components/locationItem/LocationItem';
import { linkApiLocation, linkApiCaracter } from '../../constants';
import { getPageIdLocation, getAllLocation } from '../../actions/location';

function Location() {
  const params = useParams();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locationReducer.location);
  const characters = useSelector((state) => state.locationReducer.characters);
  const linkPageIdArr = useSelector((state) => state.locationReducer.linkPageIdArr);
  const isLoading = useSelector((state) => state.locationReducer.isLoading);
  const errorLocation = useSelector((state) => state.locationReducer.errorLocation);
  const errorCharacters = useSelector((state) => state.locationReducer.errorCharacters);

  useEffect(() => {
    dispatch(getPageIdLocation(linkApiLocation, params.id));
  }, []);

  useEffect(() => {
    if (linkPageIdArr) dispatch(getAllLocation(linkApiCaracter, linkPageIdArr));
  }, [linkPageIdArr]);

  return (
    <div>
      <h1>Страница локации</h1>

      {errorLocation || errorCharacters
        ? (
          <h2>
            Произошла ошибка
            {error}
          </h2>
        )
        : ''}

      {!isLoading
        ? (
          <>
            <LocationItem location={location} />
            <CharacterList characters={characters} title="Список персонажей" />
          </>
        )
        : <Preloader />}
    </div>
  );
}

export default Location;
