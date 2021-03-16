import { useEffect, useState } from "react";
import styled from 'styled-components';

import { scrollBtn, breakpoint } from "../styles/theme";



export const ScrollButton = () => {

    const [ show, setShow ] = useState(false);

    const handleShowBtn = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setShow(true);
            }
            if (window.scrollY < 10) {
                setShow(false);
            }
        })
    }

    useEffect(handleShowBtn, []);

    return (
        <Button show={show} onClick={() => {window.scroll({top: 1, behavior: 'smooth'})}} >top</Button>
    )
}

const Button = styled.button`
    position: fixed;
    bottom: ${props => props.show ? scrollBtn.show : scrollBtn.hide};
    left: 3rem;
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