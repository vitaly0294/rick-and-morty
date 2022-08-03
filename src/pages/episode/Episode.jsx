import React, { useEffect, useState } from 'react';
import './episode.scss';

import { useParams } from 'react-router-dom';
import EpisodeService from '../../API/EpisodeService';
import { useFetching } from '../../hooks/useFetching';
import EpisodeItem from '../../components/episodeItem/EpisodeItem';
import Preloader from '../../components/UI/preloader/Preloader';
import CharacterList from '../../components/characterList/CharacterList';

const Episode = () => {
  const params = useParams();
  const [episode, setEpisode] = useState({});
  const [characters, setСharacters] = useState([]);
  const linkPageEpisode = `https://rickandmortyapi.com/api/episode/${params.id}`;
  const [linkPageCharacters, setLinkPageCharacters] = useState();

  const [fetchEpisode, isLoadingEpisode, errorEpisode] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPageEpisode);
    setEpisode(response.data);

    const arr = [];
    response.data.characters.forEach(item => {
      arr.push(parseInt(item.match(/\d+/)));
    })
    setLinkPageCharacters(`https://rickandmortyapi.com/api/character/${arr}`);
  });

  const [fetchCharacter, isLoadingCharacter, errorCharacter] = useFetching(async () => {
    const response = await EpisodeService.getAll(linkPageCharacters);
    setСharacters(response.data);
  });

  useEffect(() => {
    fetchEpisode();
  }, []);

  useEffect(() => {
    if (linkPageCharacters) fetchCharacter();
  }, [linkPageCharacters]);

  return (
    <div>
      <h1>Сраница эпизода</h1>

      {errorEpisode && errorCharacter &&
        <h2>Произошла ошибка {error}</h2>
      }

      {isLoadingEpisode
        ? <Preloader isLoadingEpisode={isLoadingEpisode}/>
        : <EpisodeItem episode={episode}/>
      }

      {isLoadingCharacter
        ? <Preloader isLoadingCharacter={isLoadingCharacter}/>
        : <CharacterList characters={characters} title='Список персонажей'/>
      }
    </div>
  );
};

export default Episode;