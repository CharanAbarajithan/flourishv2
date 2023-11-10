// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

import SignatureMangoWoff from './assets/fonts/font.woff';
import SignatureMangoWoff2 from './assets/fonts/font.woff2';
import RoieWoff from './assets/fonts/Roie.woff';
import RoieWoff2 from './assets/fonts/Roie.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Signature Mango';
    src: url(${SignatureMangoWoff2}) format('woff2'),
         url(${SignatureMangoWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roie';
    src: url(${RoieWoff2}) format('woff2'),
         url(${RoieWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Signature Mango', sans-serif;
    background-color: #0C0C0C; // Set the background color for the whole page
    color: #FFFFFF; // Assuming you want white text for contrast
  }
`;

export default GlobalStyle;
