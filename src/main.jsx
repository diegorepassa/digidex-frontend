import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: import.meta.env.VITE_URI_GRAPHQL,
  cache: new InMemoryCache()
});

console.log(import.meta.env.VITE_URI_GRAPHQL)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
