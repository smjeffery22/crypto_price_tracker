import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search Crypto</h1>
        <form>
          <input className="coin-input" type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </div>

      <div className="coin-heading-container">
        <div className="coin-heading">
          <p className="coin-heading-logo"></p>
          <p className="coin-heading-name">Name</p>
          <p className="coin-heading-symbol">Symbol</p>
        </div>
        <div className="coin-data-heading">
          <p className="coin-heading-price">Price</p>
          <p className="coin-heading-volume">Total Volume</p>
          <p className="coin-heading-percent">24h Change</p>
          <p className="coin-heading-marketcap">Market Cap</p>
        </div>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            total_volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            market_cap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;
