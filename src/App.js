import React, { 
  useState, 
  useEffect,
} from 'react';
import axios from 'axios';

import './App.css';

import Card from './Card';
import Search from './Search';

function App() {
  const pageSize = 20
  const [ page, setPage ] = useState(1);
  const [ cards, setCards ] = useState([]);


  const updateCardList = () => {
    (async function loadCards() {
      const result = await axios(
        `https://api.elderscrollslegends.io/v1/cards?pageSize=${pageSize}&page=${page}`,
      );
      setPage(page + 1);
      setCards(cards => [...cards, ...result.data.cards])
    })();
  }

  const handleScroll = () => {
    const el = document.documentElement;
    if (window.innerHeight + el.scrollTop !== el.offsetHeight) return;
    updateCardList();
  }

  useEffect(() => {
    updateCardList(page);
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div>
      <h1>This is my highspot coding exercise.</h1>

      <ul className="cards">
        {cards.map( card => (
          <li key={card.id}><Card data={card} /></li>
        ))}
      </ul>
    </div>
  )

}

export default App;
