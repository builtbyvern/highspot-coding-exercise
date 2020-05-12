import React, { useState, useEffect } from 'react';
import Card from './Card';
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import { css } from "@emotion/core";

import './CardList.scss';

function CardList() {
  const pageSize = 20
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const updateCardList = () => {
    setIsLoading(true);

    (async function loadCards() {
      try {
        const result = await axios.get(
          `https://api.elderscrollslegends.io/v1/cards?pageSize=${pageSize}&page=${page}`,
        );
        setPage(page + 1);
        setCards(cards => [...cards, ...result.data.cards])
        setIsLoading(false);
      } catch (error) {
        alert('error');
        console.error(error)
      }
    })();
  }

  const handleScroll = () => {
    const el = document.documentElement;
    if (window.innerHeight + el.scrollTop !== el.offsetHeight) return;
    updateCardList();
  }

  useEffect(() => {
    updateCardList(page);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <h1 className="border-bottom">Elder Scrolls: Legends Cards</h1>
      <ul className="cards">
        {cards.map(card => (
          <li key={card.id} className="card-container"><Card data={card} /></li>
        ))}
      </ul>
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

export default CardList;

