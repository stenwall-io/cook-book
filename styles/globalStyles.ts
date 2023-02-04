import { globalCss } from '@nextui-org/react';

const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: '$background',
  },
  h1: {
    letterSpacing: '$normal',
    fontWeight: '$semibold',
  },
  h3: {
    letterSpacing: '$normal',
    fontWeight: '$medium',
    lineHeight: '$xs',
  },
});

export default globalStyles;
