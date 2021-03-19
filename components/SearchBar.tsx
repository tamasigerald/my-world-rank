import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import styled from 'styled-components';;

export const SearchBar = (props) => {

    const { searchValue, setSearchValue }: any = useContext(SearchContext);

    return (
        <SearchWrapper>
            <Search type="text" placeholder="search" value={searchValue || ''} onChange={(e) => {setSearchValue(e.target.value.toLowerCase())}} />
        </SearchWrapper>
    )
}

const SearchWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 60px;
    /* margin-top: 60px; */
    padding: 0 2rem;
    height: 40px;
    width: 100vw;
    z-index: 99;

    /* background-color: ${props => props.theme.colors.body}; */
`

const Search = styled.input`
    background-color: ${props => props.theme.colors.text};
    border: 0;
    border-radius: 0.3rem;
    color: ${props => props.theme.colors.body};
    font-weight: 400;
    outline: 0;
    height: 26px;
    width: 65px;
    margin: 0;
    padding: 1rem 1.5rem;
    opacity: 0.8;
    cursor: pointer;
    transition: width 0.5s;
    &:focus {
        width: 180px;
    }
    &:hover {
        width: 180px;
    }

    &::placeholder {
        color: ${props => props.theme.colors.body};
    }
`