import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    line-height: calc(1em + 0.5rem);
  }

  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  #__next {
    isolation: isolate;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.foreground};
    padding: 0;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  main {
    padding: 2rem;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    margin-top: 5rem;

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
