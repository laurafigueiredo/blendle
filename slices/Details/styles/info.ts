import styled from 'styled-components';
import { layout } from '~/styles';

export const SWrapper = styled.div`
  margin-bottom: 3.4rem;

  @media ${layout.md} {
    margin-bottom: 4.4rem;
  }
`;

export const STitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: var(--font-weight-bold);
  font-size: 2.2rem;
  color: var(--blue-700);

  @media ${layout.md} {
    font-size: 2.6rem;
  }
`;

export const SDescription = styled.p`
  font-weight: var(--font-weight-regular);
  font-size: 1.8rem;
  color: var(--blue-600);

  @media ${layout.md} {
    font-size: 2rem;
  }
`;
