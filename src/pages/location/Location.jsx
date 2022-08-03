import React, { useEffect, useState } from 'react';
import './location.scss';

import { useParams } from 'react-router-dom';
import EpisodeService from '../../API/EpisodeService';
import { useFetching } from '../../hooks/useFetching';
import Preloader from '../../components/UI/preloader/Preloader';
import CharacterList from '../../components/characterList/CharacterList';
import LocationItem from '../../components/locationItem/LocationItem';

const Location = () => {
  const params = useParams();
  const [location, setlocation] = useState({});
  const [characters, setСharacters] = useState([]);
  const linkPagelocation = `https://rickandmortyapi.com/api/location/${params.id}`;
  const [linkPageCharacters, setLinkPageCharacters] = useState();

  const [fetchlocation, isLoadinglocation, errorlocation] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPagelocation);
    setlocation(response.data);

    const arr = [];
    response.data.residents.forEach(item => {
      arr.push(parseInt(item.match(/\d+/)));
    })
    setLinkPageCharacters(`https://rickandmortyapi.com/api/character/${arr}`);
  });

  const [fetchCharacter, isLoadingCharacter, errorCharacter] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPageCharacters);
    setСharacters(response.data);
  });

  useEffect(() => {
    fetchlocation();
  }, []);

  useEffect(() => {
    if (linkPageCharacters) fetchCharacter();
  }, [linkPageCharacters]);

  return (
    <div>
      <h1>Страница локации</h1>

      {errorlocation && errorCharacter &&
        <h2>Произошла ошибка {error}</h2>
      }

      {isLoadinglocation
        ? <Preloader isLoadinglocation={isLoadinglocation}/>
        : <LocationItem location={location}/>
      }

      {isLoadingCharacter
        ? <Preloader isLoadingCharacter={isLoadingCharacter}/>
        : <CharacterList characters={characters} title='Список персонажей'/>
      }
    </div>
  );
};

export default Location;