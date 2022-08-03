import React, { useState, useEffect } from 'react';
import './character.scss';

import { useParams, Link } from 'react-router-dom';
import EpisodeService from '../../API/EpisodeService';
import { useFetching } from '../../hooks/useFetching';
import EpisodeList from '../../components/episodeList/EpisodeList';
import CharacterItem from '../../components/characterItem/CharacterItem';
import Preloader from '../../components/UI/preloader/Preloader';
import LocationItem from '../../components/locationItem/LocationItem';

const Character = () => {
  const params = useParams();
  const [character, setСharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [location, setlocation] = useState({});
  const linkPageCharacter = `https://rickandmortyapi.com/api/character/${params.id}`;
  const [linkPageEpisodes, setLinkPageEpisodes] = useState();

  const [fetchCharacter, isLoadingCharacter, errorCharacter] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPageCharacter);
    setСharacter(response.data);
    setlocation({...response.data.location, ip: parseInt(response.data.location.url.match(/\d+/))});

    const arr = [];
    response.data.episode.forEach(item => {
      arr.push(parseInt(item.match(/\d+/)));
    })
    setLinkPageEpisodes(`https://rickandmortyapi.com/api/episode/${arr}`);
  });

  const [fetchEpisode, isLoadingEpisode, errorEpisode] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPageEpisodes);
    setEpisodes(response.data);
  });

  useEffect(() => {
    fetchCharacter();
  }, []);

  useEffect(() => {
    if (linkPageEpisodes) fetchEpisode();
  }, [linkPageEpisodes]);

  return (
    <div>
      <h1>Сраница персонажа</h1>

      {errorEpisode && errorCharacter &&
        <h2>Произошла ошибка {error}</h2>
      }

      {isLoadingCharacter
        ? <Preloader isLoadingCharacter={isLoadingCharacter}/>
        : <CharacterItem character={character}/>
      }

      {isLoadingEpisode
        ? <Preloader isLoadingEpisode={isLoadingEpisode}/>
        : <EpisodeList episodes={episodes} title='Страница эпизодов'/>
      }

      {isLoadingCharacter
        ? <Preloader isLoadingCharacter={isLoadingCharacter}/>
        : <LocationItem location={location}/>
      }
    </div>
  );
};

export default Character;