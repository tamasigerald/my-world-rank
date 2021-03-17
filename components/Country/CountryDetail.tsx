import { Modal } from "../Modal";
import { Content, ContentRow, Row, Title } from "./MainComponents";

export const CountryDetail = (props) => {

    const country = props.country;

    return (
        <>
        {country.nativeName && <Row>
            <Title>Native name:</Title>
            <Content>{country.nativeName}</Content>
        </Row>}
        {country.demonym && <Row>
            <Title>Demonym:</Title>
            <Content>{country.demonym}</Content>
        </Row>}
        {country.region && <Row>
            <Title>Region:</Title>
            <Content>{country.region}</Content>
        </Row>}
        {country.subregion && <Row>
            <Title>Subregion:</Title>
            <Content>{country.subregion}</Content>
        </Row>}
        {country.capital && <Row>
            <Title>Capital:</Title>
            <Content>{country.capital}</Content>
        </Row>}
        {country.area && <Row>
            <Title>Area:</Title>
            <Content><span>{country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km<sup>2</sup></span></Content>
        </Row>}
        {country.population && <Row>
            <Title>Area:</Title>
            <Content><span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></Content>
        </Row>}
        {country.alpha2Code && <Row>
            <Title>Alpha Code:</Title>
            <Content>{country.alpha2Code} - {country.alpha3Code}</Content>
        </Row>}
        {country.languages && <Row>
            <Title>Languages:</Title>
            <Content>
            {country.languages.map((lang, i) => (
                <ContentRow key={i}>{lang.name} - {lang.nativeName}</ContentRow>
            ))}
            </Content>
        </Row>}
        {country.regionalBlocs && <Row>
            <Title>Regional Blocks:</Title>
            <Content>
            {country.regionalBlocs.map((el, i) => (
                    <ContentRow key={i}>{el.acronym}</ContentRow>
            ))}
            {country.regionalBlocs.map((el, i) => (
                    <ContentRow key={i}>{el.name}</ContentRow>
            ))}
            </Content>
        </Row>}
        </>
    )
}