import styled from 'styled-components';


export const ModalWrapper = (props) => {
    return (
        <>
            <Modal active={props.active}>{props.children}</Modal>
            <ModalBg active={props.active} />
        </>
    )
}

const Modal = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background-color: gray;
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
    z-index: 9999;
    transition: transform 0.5s ease;
`

const ModalBg = styled.div`
    /* display: ${props => props.active ? 'block' : 'none'}; */
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100vh;
    background-color: ${props => props.theme.colors.body};
    opacity: ${props => props.active ? '0.9' : '0'};
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
    transition: opacity 0.5s ease;

`