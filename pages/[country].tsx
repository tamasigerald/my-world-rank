import Head from 'next/head';
import { useRouter } from "next/router"
import { FC, useContext, useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import { Section, SectionHeader, SectionContent } from "../components/Section"
import { CountryDetail } from '../components/Country/CountryDetail';
import { CountryTranslation } from '../components/Country/CountryTranslation';
import { CountryMisc } from '../components/Country/CountryMisc';
import { ModalWrapper } from '../components/Modal';
import { Button } from '../components/Button';
import { ModalContext } from '../contexts/ModalContext';

type Modal = '' | 'translations' | 'misc' ;

const Country: FC = () => {

    const router = useRouter();
    const route = router.asPath.replace(/^\//, '');
    const initialModalState: Modal = '';

    const { showModal, setShowModal }: any = useContext(ModalContext);

    const [ country, setCountry ] = useState(null);
    const [ modal, setModal ] = useState<Modal>(initialModalState);

    const closeModal = () => {
        setShowModal(!showModal);
        setModal(initialModalState);
    }

    const handleModal = (a: Modal) => {
        setShowModal(!showModal);
        setModal(a)
        console.log(a);
    }

    const renderModal = (modal) => {
        switch(modal) {
            case 'translations':
                return (
                <>
                    <ContentTitle><h3>Translations</h3></ContentTitle>
                    <CountryTranslation country={country} />
                </>)
            case 'misc':
                return (
                    <>
                        <ContentTitle><h3>Misc</h3></ContentTitle>
                        <CountryMisc country={country} />
                    </>
                )
                

            default:
                break;
        }
    }

    const getData = () => {
        if (route !== '[country]') {
            axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/name/${route}?fullText=true`)
            .then (res => setCountry(res.data[0]))
            .catch(err => console.log(err))
        }
    }

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
                    <Buttons onClick={() => handleModal('translations')}>Translations</Buttons>
                    <Buttons onClick={() => handleModal('misc')}>More</Buttons>
                    <ContentTitle><h3>Details</h3></ContentTitle>
                    <CountryDetail country={country} />

                    <ModalWrapper fn={closeModal}>
                        {renderModal(modal)}
                    </ModalWrapper>
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

const Buttons = styled(Button)`
    border: 0;
    position: relative;
    transform: translate(-15%, -50%);
    margin: 0 5%;
    width: 120px;
    border-radius: 1rem;

    &:before {
        border-radius: 1rem;
    }
`