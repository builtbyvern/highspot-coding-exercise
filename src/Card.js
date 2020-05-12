import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { GiCardPlay } from "react-icons/gi";

function Card(props) {
  const { name, imageUrl, text, set, type } = props.data;

  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="details">
        <div className="meta">
          <GiCardPlay size={18} color="#ececec" /> <span>{type}</span>
        </div>

        <div className="name">
          <h6>{set.name}</h6>
          <h2>{name}</h2>
        </div>

        {text &&
          <div className="text">
            <p>{text}</p>
          </div>
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
}

export default Card;
