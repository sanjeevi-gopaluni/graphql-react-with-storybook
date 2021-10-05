import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ApolloClient from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory';
// const client = new ApolloClient({ uri: 'http://localhost:9000/graphql' });
const httpLink = new HttpLink({
  uri: 'http://localhost:9000/graphql'
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:9000/graphql",
  options: {
      reconnect: true,
   }
});
const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});
// const client = new ApolloClient({
//   link: link,
//   cache: new InMemoryCache(),
// });
// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <ApolloHooksProvider client={client}>
//       <App />
//     </ApolloHooksProvider>
//   </ApolloProvider>,
//   document.getElementById('root')
// );

// if (module.hot) {
//   module.hot.accept('./App', () => {
//       const NextApp = require('./App').default;
//       render(<NextApp/>);
//   })
// }

function render(component) {
  ReactDOM.render(<ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
      {component}
      </ApolloHooksProvider>
  </ApolloProvider>, document.getElementById('root'));
}

render(<App />);