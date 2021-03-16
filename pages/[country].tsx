import Head from 'next/head';
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react";
import { Section, SectionHeader, SectionContent } from "../components/Section"
import { styled } from "../styles/theme";



const Country: FC = () => {

    const router = useRouter();

    const route = router.asPath.replace(/^\//, '');

    const [ country, setCountry ] = useState(null);

    const getData = () => {
        if (route !== '[country]') {
            fetch(`https://restcountries.eu/rest/v2/name/${route}?fullText=true`)
            .then(res => res.json())
            .then (res => setCountry(res[0]))
            .catch(err => console.log(err))
        }
    }

    console.log(country);

    useEffect(getData, [router.isReady]);

    return (
        <>
            <Head>
                {country && <title>myCountry | {country.name}</title>}
            </Head>
            {country  && 
            <Section>
                <SectionHeader>
                    <h2>{country.name}</h2>
                </SectionHeader>
                <SectionContent>
                    <Flag src={country.flag} />

                    <ContentTitle>
                        <h3>Details</h3>
                    </ContentTitle>

                    {country.nativeName && <Row>
                        <Title>Native name:</Title>
                        <Content>{country.nativeName}</Content>
                    </Row>}
                    {country.demonym && <Row>
                        <Title>Demonym:</Title>
                        <Content>{country.demonym}</Content>
                    </Row>}
                    {country.capital && <Row>
                        <Title>Capital:</Title>
                        <Content>{country.capital}</Content>
                    </Row>}
                    {country.area && <Row>
                        <Title>Area:</Title>
                        <Content>{country.area} km<sup>2</sup></Content>
                    </Row>}
                </SectionContent>
            
            </Section>}
        </>

    )
}

export default Country;

const ContentTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.colors.text};
        border-radius: 0.5rem;
        opacity: 0.3;
        height: 100%; 
        width: 100%;
    }

    h3 {
        font-weight: 400;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Title = styled.p`
    display: flex;
    flex: 1;
`

const Content = styled.p`
    display: flex;
    flex: 1.5;
    padding-left: 2rem;

    & sup {
        font-size: 65%;
    }
`

const Flag = styled.img`
    border-radius: 1rem;
    margin: 2rem 0;
    width: 90%;
`