import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.foreground};
    line-height: ${({ theme }) => theme.lineHeights.base};
    height: 100%;
    min-height: 100vh;
  }

  main {
    padding: 2rem;
    width: 100%;
    margin: 0 auto;
    height: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 1100px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 1300px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 1600px;
    }
  }

  ul {
    list-style: none;
  }

  ul,
  li,
  figure,
  img,
  p,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  a,
  button {
    all: unset;
    cursor: pointer;
  }

  h1 {
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.xl3};
    margin: 0;
  }

  h2: {
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }

  h3 {
    letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights.xs};
  }

  p {
    letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;
