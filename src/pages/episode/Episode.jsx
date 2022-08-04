import React, { useEffect, useState } from 'react';
import './episode.scss';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import EpisodeItem from '../../components/episodeItem/EpisodeItem';
import Preloader from '../../components/UI/preloader/Preloader';
import CharacterList from '../../components/characterList/CharacterList';
import { getDataIdArr } from '../../utils/pages';
import { linkApiEpisode, linkApiCaracter } from '../../constants';
import IndexService from '../../API/IndexService';

const Episode = () => {
  const params = useParams();
  const [episode, setEpisode] = useState({});
  const [characters, setСharacters] = useState([]);
  const [linkPageIdArr, setLinkPageIdArr] = useState();

  const [fetchEpisode, isLoadingEpisode, errorEpisode] = useFetching(async () => {
    const response = await IndexService.getPageId(linkApiEpisode, params.id);
    setEpisode(response.data);

    setLinkPageIdArr(getDataIdArr(response.data.characters));
  });

  const [fetchCharacter, isLoadingCharacter, errorCharacter] = useFetching(async () => {
    const response = await IndexService.getAll(linkApiCaracter, linkPageIdArr);
    setСharacters(response.data);
  });

  useEffect(() => {
    fetchEpisode();
  }, []);

  useEffect(() => {
    if (linkPageIdArr) fetchCharacter();
  }, [linkPageIdArr]);

  return (
    <div>
      <h1>Страница эпизода</h1>

      {errorEpisode || errorCharacter
        ? <h2>Произошла ошибка {error}</h2>
        : ''
      }

      {!isLoadingEpisode
        ? <EpisodeItem episode={episode}/>
        : ''
      }

      {!isLoadingCharacter
        ? <CharacterList characters={characters} title='Список персонажей'/>
        : ''
      }

      {(isLoadingEpisode || isLoadingCharacter)
        ? <Preloader/>
        : ''
      }
    </div>
  );
};

export default Episode;