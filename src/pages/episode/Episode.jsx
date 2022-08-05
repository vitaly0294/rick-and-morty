import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './episode.scss';
import { useParams } from 'react-router-dom';
import EpisodeItem from '../../components/episodeItem/EpisodeItem';
import Preloader from '../../components/UI/preloader/Preloader';
import CharacterList from '../../components/characterList/CharacterList';
import { linkApiEpisode, linkApiCaracter } from '../../constants';
import { getPageIdEpisode, getAllEpisode } from '../../actions/episode';

const Episode = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const episode = useSelector(state => state.episodeReducer.episode);
  const characters = useSelector(state => state.episodeReducer.characters);
  const linkPageIdArr = useSelector(state => state.episodeReducer.linkPageIdArr);
  const isLoading = useSelector(state => state.episodeReducer.isLoading);
  const errorEpisode = useSelector(state => state.episodeReducer.errorEpisode);
  const errorCharacters = useSelector(state => state.episodeReducer.errorCharacters);

  useEffect(() => {
    dispatch(getPageIdEpisode(linkApiEpisode, params.id));
  }, []);

  useEffect(() => {
    if (linkPageIdArr) dispatch(getAllEpisode(linkApiCaracter, linkPageIdArr));
  }, [linkPageIdArr]);

  return (
    <div>
      <h1>Страница эпизода</h1>

      {errorEpisode || errorCharacters
        ? <h2>Произошла ошибка {error}</h2>
        : ''
      }

      {!isLoading
        ? <>
          <EpisodeItem episode={episode}/>
          <CharacterList characters={characters} title='Список персонажей'/>
        </>
        : <Preloader/>
      }
    </div>
  );
};

export default Episode;