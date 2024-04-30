import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const GRAPHQL_URL = `https://api.airhub-app.com/api/graphql`;

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${JSON.stringify(path)}`
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

export default function getApolloClient() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: GRAPHQL_URL,
    link: from([authLink, errorLink, httpLink]),
    connectToDevTools: typeof window !== "undefined",
    ssrMode: true,
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-first",
        errorPolicy: "none",
      },
      query: {
        fetchPolicy: "cache-first",
        errorPolicy: "none",
      },
      mutate: {
        errorPolicy: "none",
      },
    },
  });

  return client;
}
