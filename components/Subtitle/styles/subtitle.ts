import styled from 'styled-components';
import { layout } from '~/styles';

export const SSubtitle = styled.h2`
    font-weight: var(--font-weight-bold);
    font-size: 2.2rem;
    color: var(--grey-500);

    @media ${layout.md} {
        font-size: 2.6rem;
      }
`;
