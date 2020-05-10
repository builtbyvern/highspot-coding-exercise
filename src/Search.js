import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


function Search(props) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = (currentPage) => {
    (async function loadCards() {
      const result = await axios(
        `https://api.elderscrollslegends.io/v1/cards?name=${query}`,
      );
      setCards(result.data.cards)
    })();
  }


  return (
    <div>
      <input type="text" onChange={e => handleChange(e)} />
      <button  onClick={() => handleSearch(page)}>Search</button>
      <ul>
        {cards && cards.map( (card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
    </div>
  )
}

Search.propTypes = {
  pageSize: PropTypes.number,

}

export default Search
