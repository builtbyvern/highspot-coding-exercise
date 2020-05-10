import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { name, imageUrl, text, set, type } = props.data;

  return (
    <div className="cards">
     {name}
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card;

/*

      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>{text}</p>
      <p>Set: {set.name}</p>
      <p>Type: {type}</p>
      */
