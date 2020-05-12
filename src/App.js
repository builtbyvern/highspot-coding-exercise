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
  const handleShowAll = (e) => {
    e.preventDefault();
    setShowAll(true);
    setShowSearch(false);
    setShowWelcome(false);
  }

  const handleShowSearch = (e) => {
    e.preventDefault();
    setShowAll(false);
    setShowSearch(true);
    setShowWelcome(false);
  }

  const handleShowHome = (e) => {
    e.preventDefault();
    setShowAll(false);
    setShowSearch(false);
    setShowWelcome(true);
  }

  return (
    <div>
      <div className="container">
        {showWelcome && 
          <h1>Welcome to <em>Vern’s Highspot coding exericse</em>. <br /><br />Perhaps you’re looking 
            to <a href="#" onClick={e => handleShowAll(e)}>browse all the Elder Scrolls: Legends cards</a>. Maybe you’d rather <a href="#" onClick={e => handleShowSearch(e)}>search for a specific card</a>. <br /><br />Either way, happy browsing.
          </h1>
        }
        {!showWelcome && <a className="home" href="#" onClick={e => handleShowHome(e)} ><GoHome /> Home</a>}
        {showAll && <CardList />}
        {showSearch && <Search />}
      </div>
      
      
    </div>
  )

}

export default App;
