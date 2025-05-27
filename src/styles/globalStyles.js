import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    line-height: 1.45;
  }
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }
  h1 {
    font-weight: 600;
    letter-spacing: -0.5px;
    font-size: clamp(1.5rem, 2vw + 1rem, 2.2rem);
    margin-bottom: 1rem;
  }
`;
