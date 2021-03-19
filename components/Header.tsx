import { styled } from '../styles/theme';
import Link from 'next/link';
import { useState } from 'react';

export const Header = (props) => {
    
    const [ themeT, setThemeT ] = useState(false);

    
    const toggleT = () => {
        setThemeT(!themeT);
    }

    return (
    <HeaderContainer>
        <ToggleThemeButton>
            <svg onClick={() => props.themeToggler('dark')} viewBox="0 0 32 32"
                width="64px"
                height="64px">
                <circle cx="16" cy="16" r="10" fill="white" />
                <circle cx="22" cy="10" r="10" fill="#252329" className={`animatable ${props.theme === 'light' ? 'is-animated' : ''}`} />
            </svg>

        </ToggleThemeButton>
        <NavBar>
            <Link href="/"><NavLink>Home</NavLink></Link>
            <Link href="/about"><NavLink>About</NavLink></Link>
        </NavBar>
        <NavToggle>M</NavToggle>
    </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 2rem;
    top: 0;
    height: 60px;
    width: 100vw;
    z-index: 999;
    background-color: ${props => props.theme.colors.body};
    transition: background-color 0.25s;
`

const NavBar = styled.nav`
    margin-left: auto;
`

const NavLink = styled.a`
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    margin: 1rem;
    cursor: pointer;
`

const NavToggle = styled.div`
    display: none;
`

const ToggleThemeButton = styled.div`
    cursor: pointer;
    width: 40px;

    -webkit-tap-highlight-color: transparent;

    & svg {
        max-height: 100%;
        max-width: 100%;
    }

    & :first-child {
        fill: ${props => props.theme.colors.text};
    }

    & .animatable {
        will-change: transform;
        transform: translate(0, 0);
        transition: transform 0.5s linear, fill 0.25s;
        fill: ${props => props.theme.colors.body};
    }
    & .is-animated {
        transform: translate(20px, -20px);
    }
`