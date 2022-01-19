import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import { Routers } from './routers';

export const App: React.FunctionComponent<unknown> = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Routers />
      </ApolloProvider>
    </>
  );
};
