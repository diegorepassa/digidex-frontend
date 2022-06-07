import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const divOrder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const divOptions = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5% 0 5%;
`;

export const wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const selectOrder = styled.select`
    border: 0px solid #ccc;
    cursor: pointer;
`;

export const selectOption = styled.select`
    background-color: #CEE4FE;
    padding: 7px;
    border: 0px solid #ccc;
    border-radius: 10px;
    color: #0072F5;
    cursor: pointer;
`;

export const group = styled.div`
    display: flex;
    height: 50px;
`;