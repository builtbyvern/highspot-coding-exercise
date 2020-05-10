import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const { name, imageUrl, text, set, type } = props.data;

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{text}</p>
      <p>Set: {set.name}</p>
      <p>Type: {type}</p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card;

/*

      
      */
