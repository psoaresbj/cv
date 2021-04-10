import { colors } from '../../variables/colors';
import { createGlobalStyle } from 'styled-components';
import { fonts } from '../../variables/fonts';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    min-height: 100%;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    box-sizing: border-box;
    color: ${colors.n06};
    font-family: ${fonts.families.primary};
    font-size: 1.125rem;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: scroll;

    -webkit-overflow-scrolling: touch;

    * {
      box-sizing: border-box;
    }
  }

  a {
    outline: 0;
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      outline: 0;
      text-decoration: none;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  }

  b,
  strong {
    font-weight: ${fonts.weights.bold};
  }
`;
