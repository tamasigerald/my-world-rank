import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../contexts/ModalContext';
import { Button } from './Button';



export const ModalWrapper = (props) => {

    const { showModal }:any = useContext(ModalContext);

    return (
        <>
            <Modal active={showModal}>
                <Button onClick={() => props.fn()}>back</Button>
                {props.children}
            </Modal>
            <ModalBg active={showModal} />
        </>
    )
}

const Modal = styled.div`
    position: fixed;
    bottom: 0;
    border-radius: 2rem 2rem 0 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.dext};
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
    padding: 80px 30px 5% 30px;
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
    opacity: ${props => props.active ? '0.95' : '0'};
    transform: ${props => props.active ? 'translateY(0)' : 'translateY(100%)'};
    transition: opacity 0.5s ease;

`