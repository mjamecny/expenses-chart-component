import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root{
  --color-soft-red: hsl(10, 79%, 65%);
  --color-cyan: hsl(186, 34%, 60%);--color-dark-brown: hsl(25, 47%, 15%);
  --color-medium-brown: hsl(28, 10%, 53%);
  --color-cream: hsl(27, 66%, 92%);
  --color-very-pale-orange: hsl(33, 100%, 98%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--color-dark-brown);
  line-height: 1.5;
  font-size: 1.8rem;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

`

export default GlobalStyles
