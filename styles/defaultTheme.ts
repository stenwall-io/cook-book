import { createTheme } from '@nextui-org/react';

const theme = createTheme({
  theme: {
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xl2: '1.5rem',
      xl3: '1.875rem',
      xl4: '2.25rem',
      xl5: '3rem',
      xl6: '3.75rem',
      xl7: '4.5rem',
      xl8: '6rem',
      xl9: '8rem',
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeights: {
      xs: '1',
      sm: '1.25',
      base: '1.5',
      md: '1.5',
      lg: '1.75',
      xl: '1.75',
      xl2: '2',
      xl3: '2.25',
      xl4: '2.5',
      xl5: '1',
      xl6: '1',
      xl7: '1',
      xl8: '1',
      xl9: '1',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    space: {
      '0': '0rem',
      '1': '0.125rem',
      '2': '0.25rem',
      '3': '0.375rem',
      '4': '0.5rem',
      '5': '0.625rem',
      '6': '0.75rem',
      '7': '0.875rem',
      '8': '1rem',
      '9': '1.25rem',
      '10': '1.5rem',
      '11': '1.75rem',
      '12': '2rem',
      '13': '2.25rem',
      '14': '2.5rem',
      '15': '2.75rem',
      '16': '3rem',
      '17': '3.5rem',
      '18': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '2.25rem',
      px: '1px',
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px',
      xl: '18px',
      squared: '33%',
      rounded: 'rounded',
      pill: '9999px',
    },
    zIndices: {
      '1': '100',
      '2': '200',
      '3': '300',
      '4': '400',
      '5': '500',
      '10': '1000',
      max: '9999',
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px',
    },
    transitions: {
      default: 'all 250ms ease',
      button:
        'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
      avatar: 'box-shadow 0.25s ease 0s, opacity 0.25s ease 0s',
      link: 'opacity 0.25s ease 0s, background 0.25s ease 0s',
      card: 'transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s',
      dropdownItem:
        'background 0.25s ease, transform 0.25s ease, color 0.15s ease, box-shadow 0.25s ease 0s',
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primaryLight: '#DAFBE8',
      primaryLightHover: '#C8F9DD',
      primaryLightActive: '#ADF5CC',
      primaryLightContrast: '#17C964',
      primary: '#4ADE7B',
      primaryBorder: '#88F1B6',
      primaryBorderHover: '#17C964',
      primarySolidHover: '#13A452',
      primarySolidContrast: '#ffffff',
      primaryShadow: '#88F1B6',
      secondaryLight: '#EADCF8',
      secondaryLightHover: '#E0CBF5',
      secondaryLightActive: '#D1B1F0',
      secondaryLightContrast: '#7828C8',
      secondary: '#7828C8',
      secondaryBorder: '#BC8EE9',
      secondaryBorderHover: '#7828C8',
      secondarySolidHover: '#6622AA',
      secondarySolidContrast: '#ffffff',
      secondaryShadow: '#BC8EE9',
      successLight: '#DAFBE8',
      successLightHover: '#C8F9DD',
      successLightActive: '#ADF5CC',
      successLightContrast: '#13A452',
      success: '#17C964',
      successBorder: '#88F1B6',
      successBorderHover: '#17C964',
      successSolidHover: '#13A452',
      successSolidContrast: '#ffffff',
      successShadow: '#88F1B6',
      warningLight: '#FDEFD8',
      warningLightHover: '#FCE7C5',
      warningLightActive: '#FBDBA7',
      warningLightContrast: '#B97509',
      warning: '#F5A524',
      warningBorder: '#F9CB80',
      warningBorderHover: '#F5A524',
      warningSolidHover: '#B97509',
      warningSolidContrast: '#ffffff',
      warningShadow: '#F9CB80',
      errorLight: '#FDD8E5',
      errorLightHover: '#FCC5D8',
      errorLightActive: '#FAA8C5',
      errorLightContrast: '#F31260',
      error: '#F31260',
      errorBorder: '#F881AB',
      errorBorderHover: '#F31260',
      errorSolidHover: '#B80A47',
      errorSolidContrast: '#ffffff',
      errorShadow: '#F881AB',
      neutralLight: '#ECEEF0',
      neutralLightHover: '#E6E8EB',
      neutralLightActive: '#DFE3E6',
      neutralLightContrast: '#687076',
      neutral: '#889096',
      neutralBorder: '#D7DBDF',
      neutralBorderHover: '#C1C8CD',
      neutralSolidHover: '#889096',
      neutralSolidContrast: '#ffffff',
      neutralShadow: '#D7DBDF',
      gradient:
        'linear-gradient(112deg, #E1EFFF -25%, #FF7AD9 -10%, #BC8EE9 80%)',
      accents0: '#F1F3F5',
      accents1: '#ECEEF0',
      accents2: '#E6E8EB',
      accents3: '#DFE3E6',
      accents4: '#D7DBDF',
      accents5: '#C1C8CD',
      accents6: '#889096',
      accents7: '#7E868C',
      accents8: '#687076',
      accents9: '#11181C',
      border: '#DFE3E6',
      background: '#ffffff',
      foreground: '#000000',
      backgroundContrast: '#ffffff',
      blue50: '#EDF5FF',
      blue100: '#E1EFFF',
      blue200: '#CEE4FE',
      blue300: '#B7D5F8',
      blue400: '#96C1F2',
      blue500: '#5EA2EF',
      blue600: '#0072F5',
      blue700: '#005FCC',
      blue800: '#004799',
      blue900: '#00254D',
      purple50: '#F7F2FD',
      purple100: '#F1E8FB',
      purple200: '#EADCF8',
      purple300: '#E0CBF5',
      purple400: '#D1B1F0',
      purple500: '#BC8EE9',
      purple600: '#7828C8',
      purple700: '#6622AA',
      purple800: '#4D1980',
      purple900: '#290E44',
      green50: '#F1FDF7',
      green100: '#E8FCF1',
      green200: '#DAFBE8',
      green300: '#C8F9DD',
      green400: '#ADF5CC',
      green500: '#88F1B6',
      green600: '#17C964',
      green700: '#13A452',
      green800: '#108944',
      green900: '#06371B',
      yellow50: '#FEF9F0',
      yellow100: '#FEF5E7',
      yellow200: '#FDEFD8',
      yellow300: '#FCE7C5',
      yellow400: '#FBDBA7',
      yellow500: '#F9CB80',
      yellow600: '#F5A524',
      yellow700: '#B97509',
      yellow800: '#925D07',
      yellow900: '#4E3104',
      red50: '#FEF0F5',
      red100: '#FEE7EF',
      red200: '#FDD8E5',
      red300: '#FCC5D8',
      red400: '#FAA8C5',
      red500: '#F881AB',
      red600: '#F31260',
      red700: '#B80A47',
      red800: '#910838',
      red900: '#4E041E',
      cyan50: '#F0FCFF',
      cyan100: '#E6FAFE',
      cyan200: '#D7F8FE',
      cyan300: '#C3F4FD',
      cyan400: '#A5EEFD',
      cyan500: '#7EE7FC',
      cyan600: '#06B7DB',
      cyan700: '#09AACD',
      cyan800: '#0E8AAA',
      cyan900: '#053B48',
      pink50: '#FFF0FB',
      pink100: '#FFE5F8',
      pink200: '#FFD6F3',
      pink300: '#FFC2EE',
      pink400: '#FFA3E5',
      pink500: '#FF7AD9',
      pink600: '#FF4ECD',
      pink700: '#D6009A',
      pink800: '#B80084',
      pink900: '#4D0037',
      gray50: '#F1F3F5',
      gray100: '#ECEEF0',
      gray200: '#E6E8EB',
      gray300: '#DFE3E6',
      gray400: '#D7DBDF',
      gray500: '#C1C8CD',
      gray600: '#889096',
      gray700: '#7E868C',
      gray800: '#687076',
      gray900: '#11181C',
      text: '#11181C',
      link: '#5E1DAD',
      codeLight: '#FFE5F8',
      code: '#FF4ECD',
      selection: '#CEE4FE',
      myColor: '#ff4ecd',
    },
    shadows: {
      xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
      sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
      md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
      lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
      xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)',
    },
    dropShadows: {
      xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
      sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
      md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))',
      lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
      xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))',
    },
  },
});

export default theme;
