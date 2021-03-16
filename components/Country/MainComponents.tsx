import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0.6rem 0;

    & :last-of-type {
        padding-bottom: 10rem;
    }
`

export const Title = styled.div`
    display: flex;
    flex: 1;
`

export const Content = styled.div`
    display: flex;
    flex: 1.5;
    flex-direction: column;
    padding-left: 2rem;

    & sup {
        font-size: 65%;
        position: absolute;
    }
`

export const ContentRow = styled.div`
    margin-bottom: 1rem;

    & :last-of-type {
        margin-bottom: 0;
    }
`
