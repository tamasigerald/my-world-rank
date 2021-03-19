
import { Content, ContentRow, Row, Title } from "./MainComponents";

export const CountryMisc = (props) => {

    const country = props.country;

    return (
        <>
        {country.callingCodes && <Row>
            <Title>Calling codes:</Title>
            <Content>
            {country.callingCodes.map((el, i) => (
                <ContentRow key={i}>+{el}</ContentRow>
            ))}
            </Content>
        </Row>}
        {country.numericCode && <Row>
            <Title>Numeri code:</Title>
            <Content>{country.numericCode}</Content>
        </Row>}
        {country.currencies && <Row>
            <Title>Currencies:</Title>
            <Content>
            {country.currencies.map((el, i) => (
                <ContentRow key={i} onClick={() => props.setModal('currency', `${el.code}`)} >{el.code} - {el.name}</ContentRow>
            ))}
            </Content>
        </Row>}
        {country.timezones && <Row>
            <Title>Timezones:</Title>
            <Content>
            {country.timezones.map((el, i) => (
                <ContentRow key={i}>{el}</ContentRow>
            ))}
            </Content>
        </Row>}
        {country.latlng && <Row>
            <Title>Location:</Title>
            <Content>
            <ContentRow>{country.latlng[0]} lat </ContentRow>
            <ContentRow>{country.latlng[1]} lng</ContentRow>
            </Content>
        </Row>}
        {country.topLevelDomain && <Row>
            <Title>Top level domain:</Title>
            <Content>
            {country.topLevelDomain.map((el, i) => (
                <ContentRow key={i}>{el}</ContentRow>
            ))}
            </Content>
        </Row>}
        </>
    )
}