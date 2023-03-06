import Head from 'next/head';
import type { AppProps } from 'next/app';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyles';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

const fetcher = (query: string) =>
  fetch(query)
    .then((res) => res.json())
    .then((jsonData) => jsonData);

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  // const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>Cook Book</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          shouldRetryOnError: true,
          fetcher,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
