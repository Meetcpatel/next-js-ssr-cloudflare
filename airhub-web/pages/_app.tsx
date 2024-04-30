import getApolloClient from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "../styles.css";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  const client = getApolloClient();
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
