import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from './Card';
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
import { DebounceInput } from 'react-debounce-input';

import './Search.scss';


function Search(props) {
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [hasUserSearched, sethasUserSearched] = useState(false);


  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const updateCardList = () => {
    setIsLoading(true);

    if (query.length) {
      (async function loadCards() {
        const result = await axios(
          `https://api.elderscrollslegends.io/v1/cards?name=${query}`,
        );


        result.data.cards.length > 0
          ? setNoResults(false)
          : setNoResults(true);

        setIsLoading(false);
        setCards(result.data.cards)
      })();
    } else {
      setIsLoading(false);
      setNoResults(true);
      setCards([]);
    }

   
  }

  useEffect(() => {
    updateCardList();
  }, [query]);


  return (
    <>
      <h1 className="border-bottom">Search the deck...</h1>
      <div className="search-field">
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder='Begin your search...'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <ul className="cards">
        {cards.map(card => (
          <li key={card.id} className="card-container"><Card data={card} /></li>
        ))}
      </ul>
      {noResults && <h2>Results, if any, will appear here as you type.</h2>}
      <div className="loading">
        <PacmanLoader
          css={override}
          size={20}
          color={"#dbffd6"}
          loading={isLoading}
        />
      </div>
    </>
  )
}

Search.propTypes = {
  pageSize: PropTypes.number,

}

export default Search
