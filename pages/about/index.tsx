import Head from 'next/head';
import styled from 'styled-components';

import { Section } from "../../components/Section";


const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About me :)</title>
            </Head>
            <Section>
                <Title>hola.</Title>
                <p>My name is Gerald and I am a web developer from Spain.</p>
                <p>Feel free to visit my personal website :)</p>
                <Mail href="https://tamasigerald.com/">www.tamasigerald.com</Mail>
                <Mail href="mailto:info@tamasigerald.com">info@tamasigerald.com</Mail>
            </Section>
        </>
    )
}

export default AboutPage;


const Title = styled.p`
    ${props => props.theme.fonts.heading};
    font-size: 8rem;
    margin-top: 45%;
`

const Mail = styled.a`
    ${props => props.theme.fonts.heading};
    display: block;
    color: ${props => props.theme.colors.text};
    font-size: 2.2rem;
    text-decoration: none;

    & :first-of-type {
        margin-top: 5%;
    }
`