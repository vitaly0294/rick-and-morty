import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './character.scss';
import { useParams } from 'react-router-dom';
import EpisodeList from '../../components/episodeList/EpisodeList';
import CharacterItem from '../../components/characterItem/CharacterItem';
import Preloader from '../../components/UI/preloader/Preloader';
import LocationItem from '../../components/locationItem/LocationItem';
import { linkApiEpisode, linkApiCaracter} from '../../constants';
import { getPageIdCharacter, getAllCharacter } from '../../actions/character';

const Character = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.characterReducer.episodes);
  const character = useSelector(state => state.characterReducer.character);
  const linkPageIdArr = useSelector(state => state.characterReducer.linkPageIdArr);
  const isLoading = useSelector(state => state.characterReducer.isLoading);
  const errorEpisode = useSelector(state => state.characterReducer.errorEpisode);
  const errorCharacters = useSelector(state => state.characterReducer.errorCharacters);
  const location = useSelector(state => state.characterReducer.location);

  useEffect(() => {
    dispatch(getPageIdCharacter(linkApiCaracter, params.id));
  }, []);

  useEffect(() => {
    if (linkPageIdArr) dispatch(getAllCharacter(linkApiEpisode, linkPageIdArr));
  }, [linkPageIdArr]);

  return (
    <div className='character'>
      <h1>Сраница персонажа</h1>

      {errorEpisode || errorCharacters
        ? <h2>Произошла ошибка {error}</h2>
        : ''
      }

      {!isLoading
        ? <>
          <CharacterItem character={character}/>
          <EpisodeList episodes={episodes} title='Страница эпизодов'/>
          <LocationItem location={location}/>
        </>
        : <Preloader/>
      }
    </div>
  );
};

export default Character;