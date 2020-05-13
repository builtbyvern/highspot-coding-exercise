import React, { useState } from 'react';

import { GoHome } from 'react-icons/go'

import './App.scss';
import Search from './Search';
import CardList from './CardList';


function App() {
  const [showAll, setShowAll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  /**
   * 
   * @param {*} e the event being passed
   * All three of the follwing functions operate in a similar way, subbing in for react-router
   * in a passable view management set up. Any more complex, and a router would be smart.
   */
  const handleShowAll = () => {
    setShowAll(true);
    setShowSearch(false);
    setShowWelcome(false);
  }

  const handleShowSearch = () => {
    setShowAll(false);
    setShowSearch(true);
    setShowWelcome(false);
  }

  const handleShowHome = () => {
    setShowAll(false);
    setShowSearch(false);
    setShowWelcome(true);
  }

  return (
    <div>
      <div className="container">
        {showWelcome && 
          <h1>Welcome to <em>my Highspot coding exericse</em>. <br /><br />Perhaps you’re looking 
            to <span class="almost-a-link" onClick={() => handleShowAll()}>browse all the Elder Scrolls: Legends cards</span>. Maybe you’d rather <span class="almost-a-link" onClick={() => handleShowSearch()}>search for a specific card</span>. <br /><br />Either way, happy browsing.
          </h1>
        }
        {!showWelcome && <span className="home almost-a-link" onClick={() => handleShowHome()} ><GoHome /> Home</span>}
        {showAll && <CardList />}
        {showSearch && <Search />}
      </div>
      
      
    </div>
  )

}

export default App;
