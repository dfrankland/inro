import { injectGlobal } from 'styled-components';

// Style inspired by https://googlefonts.github.io/japanese/#hannari
// Font from https://fonts.google.com/earlyaccess#Mplus+1p

/* eslint-disable no-unused-expressions */
injectGlobal`
  @import url(//fonts.googleapis.com/earlyaccess/mplus1p.css);

  html {
    font-size: 16px;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: #f76868;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.25) 55%,
      rgba(255, 255, 255, 0.25) 65%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: cover;
    background-repeat: no-repeat;
  }

  a {
    color: #dda2f3;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6, p, span, li {
    font-family: 'Mplus 1p', sans-serif;
    font-size: 1rem;
    color: #fff;
  }

  h1 {
    font-size: 7rem;
    margin: 0;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    position: relative;
    font-size: 1.5rem;
    :after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -0.75rem;
      left: 0;
      border-radius: 0.5rem;
      border-bottom: solid rgba(255, 255, 255, 0.125) 0.25rem;
    }
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  code {
    font-family: monospace;
    background-color: rgba(0, 0, 0, 0.125);
    padding: 0.25rem;
    border-radius: 0.25rem;
  }

  pre {
    background-color: rgba(0, 0, 0, 0.125);
    padding: 0.25rem;
    border-radius: 0.25rem;
    code {
      background-color: transparent;
    }
  }

  blockquote {
    border-radius: 0.5rem;
    border-left: solid rgba(255, 255, 255, 0.125) 0.25rem;
    border-right: solid rgba(255, 255, 255, 0.125) 0.25rem;
    margin: 1rem 0;
    padding: 0 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }
`;
/* eslint-enable */
