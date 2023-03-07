import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyles';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

const fetcher = (query: string) =>
  fetch(query)
    .then((res) => res.json())
    .then((jsonData) => jsonData);

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

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
          <style jsx global>{`
            html,
            * {
              font-family: ${rubik.style.fontFamily};
            }
          `}</style>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
