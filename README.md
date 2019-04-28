# react-js-buy-sdk

Just a basic app testing and emploring the storerfont API

An example using [js-buy-sdk](https://github.com/Shopify/js-buy-sdk) built with [React](https://facebook.github.io/react/). This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).





## Configuring

If you would like to connect your store to this example, open up `src/index.js` and update the `domain` and `storefrontAccessToken`:

```js
const client = Client.buildClient({
  storefrontAccessToken: 'your-storefront-access-token',
  domain: 'your-shop-name.myshopify.com',
});
```

## Running

Start a local server:

```
yarn start
```

* Visit your app at [http://localhost:3000](http://localhost:3000).


