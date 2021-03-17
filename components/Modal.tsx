import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../contexts/ModalContext';
import { Button } from './Button';



export const ModalWrapper = (props) => {

    const { showModal, setShowModal }:any = useContext(ModalContext);

    return (
        <>
            <Modal active={showModal}>
                <Button onClick={() => setShowModal(!showModal)}>back</Button>
                {props.children}
            </Modal>
            <ModalBg active={showModal} />
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