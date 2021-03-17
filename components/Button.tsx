import styled from 'styled-components';

import { breakpoint } from "../styles/theme";

export const Button = styled.button`
    position: absolute;
    top: 2rem;
    left: 2rem;
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    color: ${props => props.theme.colors.body};
    font-weight: 700;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    transition: bottom 0.25s;
    outline: 0;

    @media ${breakpoint.phablet} {
        &:hover {
            &:before {
                background-color: ${props => props.theme.colors.primary};
            }
        }
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.colors.text};
        transition: background-color 0.25s;
        opacity: 0.8;
        z-index: -1;
        border-radius: 50%;

    }
`