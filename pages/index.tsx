import { FC, useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Section, SectionHeader } from '../components/Section';
import { CountryTable } from '../components/Home/CountryTable';
import { SearchContext } from '../contexts/SearchContext';

interface Props {
  theme: any
}

const Home: FC<Props> = ({ theme }) => {

  const [ countries, setCountries ] = useState([]);

  const { searchValue }:any = useContext(SearchContext);

  // console.log(countries[0]);

  const getData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (res => setCountries(res))
    .catch(err => console.log(err))
  }

  useEffect(getData, []);

  return (
    <>
      <Head>
        <title>myCountry | Home</title>
      </Head>
      <Section>

        <SectionHeader><h2>Countries</h2></SectionHeader>

        <CountryTable countries={countries.filter(country => country.name.toLowerCase().includes(searchValue))} theme={theme} />
      </Section>
    </>
    
  )
}

export default Home;
