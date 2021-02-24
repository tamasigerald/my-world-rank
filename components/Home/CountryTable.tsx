
import { useRouter } from "next/router"
import { styled } from "../../styles/theme"



export const CountryTable = (props) => {

    const router = useRouter();

    const goToCountry = (target) => {
        router.push({
            pathname: `${target}`,
        })
    }

    return (
        <>
            <TableHeader>
                <div>Flag</div>
                <div>Name</div>
                <div>Population</div>
            </TableHeader>

            {props.countries.map((country, i) => (
                <TableCard key={i} onClick={() => {goToCountry(country.name)}} >
                    <Flag src={country.flag} alt={country.name} />
                    <div>{country.name}</div>
                    <div>{country.population}</div>
                </TableCard>
            ))}

        </>
    )
}


const Table = styled.div`
    /* padding: 1rem; */
    
    

`

const TableHeader = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    width: 100%;

    & :first-child {
        margin-right: 2rem;
        margin-left: 0;
    }

    & :nth-child(2) {
        margin-left: 0;
        margin-right: auto;
    }

    & * {
        margin-left: 2rem;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 0.5rem;
        opacity: 0.6;
    }
`
const TableCard = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin: 1rem 0;
    padding: 2rem 1rem;
    width: 100%;
    cursor: pointer;

    & :first-child {
        margin-left: 0;
        margin-right: 2rem;
    }

    & :nth-child(2) {
        margin-right: auto;
        margin-left: 0;
        max-width: 55%;
    }
    & * {
        margin-left: 2rem;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-color: ${props => props.theme.colors.text};
        border-radius: 0.5rem;
        opacity: 0.1;
    }
`

const Flag = styled.img`
    width: 30px;
`
