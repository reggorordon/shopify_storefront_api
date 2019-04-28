import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './css/app.css';

const client = Client.buildClient({
  storefrontAccessToken: "b20ee5a03cf88e77bfb54b05b61fa7f9",
  domain: "artis4all.myshopify.com"
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
