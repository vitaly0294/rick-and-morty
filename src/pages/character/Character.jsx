import React, { useState, useEffect } from 'react';
import './character.scss';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import EpisodeList from '../../components/episodeList/EpisodeList';
import CharacterItem from '../../components/characterItem/CharacterItem';
import Preloader from '../../components/UI/preloader/Preloader';
import LocationItem from '../../components/locationItem/LocationItem';
import { getDataIdArr, getDataId } from '../../utils/pages';
import { linkApiEpisode, linkApiCaracter} from '../../constants';
import IndexService from '../../API/IndexService';

const Character = () => {
  const params = useParams();
  const [character, setСharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [location, setlocation] = useState({});
  const [linkPageIdArr, setLinkPageIdArr] = useState();
  
  const [fetchCharacter, isLoadingCharacter, errorCharacter] = useFetching(async () => {
    const response = await IndexService.getPageId(linkApiCaracter, params.id);
    setСharacter(response.data);
    setlocation({...response.data.location, ip: getDataId(response.data.location.url)});
    setLinkPageIdArr(getDataIdArr(response.data.episode));
  });

  const [fetchEpisode, isLoadingEpisode, errorEpisode] = useFetching(async () => {
    const response = await IndexService.getAll(linkApiEpisode, linkPageIdArr);
    setEpisodes(response.data);
  });

  useEffect(() => {
    fetchCharacter();
  }, []);

  useEffect(() => {
    if (linkPageIdArr) fetchEpisode();
  }, [linkPageIdArr]);

  return (
    <div>
      <h1>Сраница персонажа</h1>

      {errorEpisode || errorCharacter
        ? <h2>Произошла ошибка {error}</h2>
        : ''
      }

      {!isLoadingCharacter
        ? <CharacterItem character={character}/>
        : ''
      }

      {!isLoadingEpisode
        ? <EpisodeList episodes={episodes} title='Страница эпизодов'/>
        : ''
      }

      {!isLoadingCharacter
        ? <LocationItem location={location}/>
        : ''
      }

      {(isLoadingEpisode || isLoadingCharacter || isLoadingCharacter)
        ? <Preloader/>
        : ''
      }
    </div>
  );
};

export default Character;