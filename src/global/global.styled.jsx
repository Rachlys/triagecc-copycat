import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  :root {
    --negro: #393939;

    --tipo-principal: system-ui,-apple-system,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji;
    --tipo-secundaria: Verdana;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --negro: #ececec;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      -webkit-animation: none !important;
              animation: none !important;
      -webkit-transition: none !important;
      transition: none !important;
    }
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    vertical-align: baseline;
  }

  img, picture, video, iframe, figure {
    max-width: 100%;
    width: 100%;
    display: block;

    -o-object-fit: cover;
      object-fit: cover;

    -o-object-position: center center;
      object-position: center center;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  p a {
    display: inline;
  }

  li {
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
    font-size: 1em;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }

  ::-moz-selection {
    background-color: var(--negro);
    color: var(--blanco);
  }
  ::selection {
    background-color: var(--negro);
    color: var(--blanco);
  }

  form, input, textarea, select, button, label {
    font-family: inherit;
    font-size: inherit;
    -webkit-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
    background-color: transparent;
    display: block;

    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
  }

  table, tr, td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    width: 100%;
    display: block;
    fill: currentColor;
  }

  p svg{
    display: inline;
    width: initial;
  }

  body {
    position: relative;
    min-height: 100vh;
    font-size: 100%;
    font-family: var(--tipo-principal);
    color: var(--negro);
    line-height: 1.4em;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`