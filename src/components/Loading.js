import React from 'react';
import loading from '../assets/img/loading.svg';
import logo from '../assets/img/loading.png';

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <img src={loading} alt="Loading" className="loading-image" />
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
    </div>
  );
};