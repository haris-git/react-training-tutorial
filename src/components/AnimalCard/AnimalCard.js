import React from 'react';
import './AnimalCard.css'

export default function AnimalCard(props) {
  const { name } = props;
  return(
    <h2>{ name }</h2>
  );
}