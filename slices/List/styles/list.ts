import styled from 'styled-components';
import { layout } from '~/styles';

export const SContainer = styled.div`
    margin: 4.8rem auto 3.2rem;
    max-width: 69rem;

    @media ${layout.md} {
        margin-top: 8rem;
        margin-bottom: 10rem;
    }
`;

export const STitlesWrapper = styled.div`
    margin-left: 1.6rem;
    margin-bottom: 2rem;

    @media ${layout.md} {
        margin-left: 3rem;
        margin-bottom: 3.8rem;
    }
`;