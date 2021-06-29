import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { CLIENT_APOLLO } from './config/ApolloClient';
import RouterMain from './routes/RouterMain';

ReactDOM.render(
  <React.Fragment>
    <ApolloProvider client={CLIENT_APOLLO}>
      <RouterMain/>
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
