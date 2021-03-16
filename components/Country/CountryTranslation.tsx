import { Content, Row, Title } from "./MainComponents";

export const CountryTranslation = (props) => {

    const country = props.country;

    return (
        <>
        {country.translations.de && <Row>
            <Title>German:</Title>
            <Content>{country.translations.de}</Content>
        </Row>}
        {country.translations.es && <Row>
            <Title>Spanish:</Title>
            <Content>{country.translations.es}</Content>
        </Row>}
        {country.translations.fa && <Row>
            <Title>Pashto:</Title>
            <Content>{country.translations.fa}</Content>
        </Row>}
        {country.translations.fr && <Row>
            <Title>French:</Title>
            <Content>{country.translations.fr}</Content>
        </Row>}
        {country.translations.it && <Row>
            <Title>Italian:</Title>
            <Content>{country.translations.it}</Content>
        </Row>}
        {country.translations.ja && <Row>
            <Title>Japanese:</Title>
            <Content>{country.translations.ja}</Content>
        </Row>}
        {country.translations.br && <Row>
            <Title>Portuguese:</Title>
            <Content>{country.translations.br}</Content>
        </Row>}
        </>
    )
}