import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 44px;
    height: 44px;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.9);
    }
`;
