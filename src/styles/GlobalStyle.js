import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --bg: #FFF8F9;
    --blue-1: #64BEFF;
    --deep-dark: #F7A1B9;
    --blue-2: #38618C;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Poppins';
    background-color: var(--bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--blue-1);
    .scroll-content {
      background-color: var(--bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--blue-1);
      }
    }
  }
`;
export default GlobalStyles;
