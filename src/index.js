import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

function Countries() {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        code
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

console.log(data.countries.map((country) => {
  return country
  }))  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Countries></Countries>
    <App />
  </ApolloProvider>
  
);
