import { createGlobalStyle } from './theme';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: ${({ theme }) => theme.typo.fontBase};
    }
    * {
        box-sizing: border-box;
    }
    body {
        ${({ theme }) => theme.fonts.text};
        background-color: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        font-size: 2rem;
        transition: all 0.25s;
    }
`