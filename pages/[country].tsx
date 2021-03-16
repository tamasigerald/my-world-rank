import Head from 'next/head';
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react";
import { Section, SectionHeader, SectionContent } from "../components/Section"
import { styled } from "../styles/theme";

import { CountryDetail } from '../components/Country/CountryDetail';
import { CountryTranslation } from '../components/Country/CountryTranslation';
import { CountryMisc } from '../components/Country/CountryMisc';



const Country: FC = () => {

    const router = useRouter();

    const route = router.asPath.replace(/^\//, '');

    const [ country, setCountry ] = useState(null);

    const getData = () => {
        if (route !== '[country]') {
            fetch(`${process.env.NEXT_PUBLIC_BASE_API}/name/${route}?fullText=true`)
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

                    <ContentTitle><h3>Details</h3></ContentTitle>
                    <CountryDetail country={country}/>

                    <ContentTitle><h3>Translations</h3></ContentTitle>
                    <CountryTranslation country={country}/>

                    <ContentTitle><h3>Misc</h3></ContentTitle>
                    <CountryMisc country={country}/>
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
    margin-top: 1.2rem;
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

const Flag = styled.img`
    border-radius: 1rem;
    margin: 2rem 0;
    width: 90%;
`