import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
    colors: {
        body: '#FAFAFA',
        text: '#124A63',
        primary: '#FFDD83',
        secondary: '#FF92A4',
        nude: '#FFE9CE',
    },
    fonts: {
        heading: 'font-family: Lato; font-weight: 700',
        text: 'font-family: Lato; font-weight: 400',
        text_l: 'font-family: Lato; font-weight: 300'
    },
    typo: {
        fontBase: '8px'
    }
};

const darkTheme = {
    ...lightTheme,
    colors: {
        body: '#252329',
        text: '#FAFAFA',
        primary: '#FFDD83',
        secondary: '#4E51BF',
        nude: '#FFE9CE',
    }
}

const breakpoint = {
    mobile: `(min-width: 640px)`,
    phablet: `(min-width: 768px)`,
    tablet: `(min-width: 1024px)`,
    desktop: `(min-width: 1280px)`,
};

const scrollBtn = {
    show: '3rem',
    hide: '-6rem'
}

export { styled, ThemeProvider, createGlobalStyle, breakpoint, lightTheme, darkTheme, scrollBtn };