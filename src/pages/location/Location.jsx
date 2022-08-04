import React, { useEffect, useState } from 'react';
import './location.scss';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import Preloader from '../../components/UI/preloader/Preloader';
import CharacterList from '../../components/characterList/CharacterList';
import LocationItem from '../../components/locationItem/LocationItem';
import { getDataIdArr } from '../../utils/pages';
import { linkApiLocation, linkApiCaracter } from '../../constants';
import IndexService from '../../API/IndexService';

const Location = () => {
  const params = useParams();
  const [location, setlocation] = useState({});
  const [characters, setСharacters] = useState([]);
  const [linkPageIdArr, setLinkPageIdArr] = useState();

  const [fetchlocation, isLoadinglocation, errorlocation] = useFetching(async () => {
    const response = await IndexService.getPageId(linkApiLocation, params.id);
    setlocation(response.data);

    setLinkPageIdArr(getDataIdArr(response.data.residents))
  });

  const [fetchCharacter, isLoadingCharacter, errorCharacter] = useFetching(async () => {
    const response = await IndexService.getAll(linkApiCaracter, linkPageIdArr);
    setСharacters(response.data);
  });

  useEffect(() => {
    fetchlocation();
  }, []);

  useEffect(() => {
    if (linkPageIdArr) fetchCharacter();
  }, [linkPageIdArr]);

  return (
    <div>
      <h1>Страница локации</h1>

      {errorlocation || errorCharacter 
        ? <h2>Произошла ошибка {error}</h2>
        : ''
      }

      {!isLoadinglocation 
        ? <LocationItem location={location}/>
        : ''
      }

      {!isLoadingCharacter
        ? <CharacterList characters={characters} title='Список персонажей'/>
        : ''
      }

      {(isLoadinglocation || isLoadingCharacter)
        ? <Preloader/>
        : ''
      }
    </div>
  );
};

export default Location;