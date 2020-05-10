import React, { 
  useState, 
  useEffect,
} from 'react';
import axios from 'axios';

import Card from './Card'

function App() {
  const pageSize = 20
  const [ page, setPage ] = useState(1);
  const [ cards, setCards ] = useState([]);

  const updateCardList = (currentPage) => {
    (async function loadCards() {
      const result = await axios(
        `https://api.elderscrollslegends.io/v1/cards?pageSize=${pageSize}&page=${currentPage}`,
      );
      setCards(cards => [...cards, ...result.data.cards])
    })();
  }

  useEffect(() => {
    updateCardList(page);
  }, [])

  return (
    <div>
      <h1>This is my highspot coding exercise.</h1>
      <ul>
        {cards.map( card => (
          <li key={card.id}><Card data={card} /></li>
        ))}
      </ul>
      <button onClick={() => updateCardList(page + 1)}>More</button>
    </div>
  )

}

export default App;
