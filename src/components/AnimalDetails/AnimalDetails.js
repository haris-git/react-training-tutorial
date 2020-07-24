import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css'

function convertFood(food) {
  switch(food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
    default:
      return '🌱';
  }
}

export default function AnimalDetails({ diet, order }) {
  return (
    <div className="details">
      <h4>Details:</h4>
      <div>
        Order: { order }
      </div>
      <div>
          Diet: { diet.map(food => convertFood(food)).join(' ') }
      </div>
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  order: PropTypes.string.isRequired
}