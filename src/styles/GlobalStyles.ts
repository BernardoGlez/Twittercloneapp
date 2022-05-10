import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration:none;
    color: var(--twitter-dark-hover);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #FFFFFF;
    --secondary: #F5F8FA;
    --tertiary: #E1E8ED;
   
    --gray: #7a7a7a;

    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;
  }

`;
