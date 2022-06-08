import styled from 'styled-components';
import { Container } from '@nextui-org/react';

export const div = styled.div`
    width: 100%;
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
`;

export const container = styled(Container)`
    display: flex;
    padding: 0 1rem 0 0;
`;

export const wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
`;