import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before
*::after {
margin:0;
padding: 0;
box-sizing:border-box;
}


body {
  margin: 0;
  font-family: 'Montserrat', 'Bebas Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   min-width: 360px;
   
}

a {
  color: ${theme.colors.mainColor};
  text-decoration: none;

}

a:focus {
  color: ${theme.colors.projectHoverColor};
}


ul {
  list-style: none;
  margin:0;
  padding: 0;
}

button {
  background-color: unset;
  border: none;
}

`