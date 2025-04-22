import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PortfolioWebsite from './PortfolioWebsite'; //  The component from the previous step
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioWebsite />
  </React.StrictMode>
);

reportWebVitals();