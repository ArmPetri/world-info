import React from 'react'
import World from './components/World'
import './style.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

// function Countries() {
//   const { loading, error, data } = useQuery(gql`
//     {
//       countries {
//         code
//         name
//       }
//     }
//   `);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

// // console.log(data.countries.map((country) => {
// //   return country
// //   }))  
// }


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <World></World>
      </div>
    </ApolloProvider>
  );
}

export default App;
