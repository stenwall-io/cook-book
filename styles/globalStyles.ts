import { globalCss } from '@nextui-org/react';

const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: '$background',
  },
  h1: {
    letterSpacing: '$normal',
  },
});

export default globalStyles;
