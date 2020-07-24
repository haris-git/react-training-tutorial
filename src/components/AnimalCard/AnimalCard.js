import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './AnimalCard.css'

export default function AnimalCard({
  additional,
  name,
  scientificName,
  showAdditional,
  size,
  ...props
}) {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}kg</h4>
      <AnimalDetails { ...props } />
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

/**
 * The PropType explicitly define the type of the data for a certain prop.
 * PropType is a runtime check!!! The code will still compile if the data is not correct.
 */
AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

/**
 * They give the chance to define some default data, in case something is not required.
 */
AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
}