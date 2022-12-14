import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global */

  :root {
    /* Color */
    --color-white: #ffffff;
    --color-light-white: #eeeeee;
    --color-dark-white: #bdbdbd;
    --color-pink: #D5BADA;
    --color-dark-pink: #9E6D9C;
    --color-dark-grey: #4d4d4d;
    --color-grey: #616161;
    --color-light-grey: #7c7979;
    --color-black: #000000;
    --color-light-black: #181818;

    /* Font size */
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;

    /* Animation Duration */
    --animation-duration: 300ms;
    --theme-duration: 500ms;
    --theme-animation: ease-out;
  }

  /* Universal tags */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body { 
    margin:0;
    padding:0;
    background-color: ${(props) =>
      `${props.isDark === false ? 'var(--color-pink)' : 'var(--color-black)'}`};
    transition: all var(--theme-duration) var(--theme-animation);
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  hr {
    margin: 0;
    padding: 0;
  }

  /* Typography */
  h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 16px 0px;
    transition: all var(--theme-duration) var(--theme-animation);
  }

  h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 8px 0;
    transition: all var(--theme-duration) var(--theme-animation);
  }

  h3 {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 8px 0;
    transition: all var(--theme-duration) var(--theme-animation);
  }

  p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 4px 0;
    transition: all var(--theme-duration) var(--theme-animation);
  }

  span {
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    transition: all var(--theme-duration) var(--theme-animation);
  }
`;

export default GlobalStyle;
