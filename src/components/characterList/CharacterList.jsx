import React from 'react';
import CharacterItem from '../characterItem/CharacterItem';
import './characterList.scss';

import { Link } from 'react-router-dom';

const CharacterList = ({characters, title}) => {
  if (!characters.length) {
    return (
      <div>Ничего не найдено!</div>
    )
  }

  return (
    <div className='characterList'>
      <h1>{title}</h1>
      {characters.map(character =>
        <Link key={character.id} to={`/character/${character.id}`}>
          <CharacterItem character={character} />
        </Link>
        
      )}
    </div>
  );
};

export default CharacterList;