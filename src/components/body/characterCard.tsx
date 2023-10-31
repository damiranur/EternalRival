import React from 'react';
import { CharacterData, ChracterCardProps } from '../../interfaces';
import ImageComponent from '../addition/imageComponent';

function CharacterCard(props: ChracterCardProps) {
  const data: CharacterData | null = props.data;
  if (!data) return;
  const episodesNumb: number = data.episode.length;
  return (
    <div className={'pokemon-card'}>
      <ImageComponent src={data.image} alt={data.name + ' photo'} />
      <h2 className={'character-name'}>{data.name}</h2>
      <p className={'character-info'}>
        <span className={'card-headers'}>Species: </span>
        {data.species}
      </p>
      <p className={'character-info'}>
        <span className={'card-headers'}>Status: </span>
        {data.status}
      </p>
      <p className={'character-info'}>
        <span className={'card-headers'}>Location: </span>
        {data.location.name}
      </p>
      <p className={'character-info'}>
        <span className={'card-headers'}>Gender: </span>
        {data.gender}
      </p>
      <p className={'character-info'}>
        <span className={'card-headers'}>Episodes: </span>
        {episodesNumb}
      </p>
    </div>
  );
}

export default CharacterCard;
