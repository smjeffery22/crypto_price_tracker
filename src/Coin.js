import React from 'react';
import './Coin.css'

const Coin = ({ image, name, symbol, price, total_volume, priceChange, market_cap }) => {
  return (
    <div className='coin-container'>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto logo" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">
            {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
          <p className="coin-volume">${total_volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            ${market_cap.toLocaleString()}
          </p>
        </div>
      </div>


    </div>
  );
};

export default Coin;
