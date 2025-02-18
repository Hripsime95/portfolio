import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        color: ${Theme.colors.font};
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section{
        padding: 100px 0;
    }

    section:nth-of-type(odd){
        background-color: ${Theme.colors.primaryBg};
    }

    section:nth-of-type(even){
        background-color: ${Theme.colors.secondaryBg};
    }

    .App{
        overflow-x: hidden;
    }
`