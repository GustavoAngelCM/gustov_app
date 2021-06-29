import {
  ApolloClient, 
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:4000/"
})

export const CLIENT_APOLLO = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});