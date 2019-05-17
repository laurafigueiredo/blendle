import styled from "styled-components";
import { layout } from '~/styles';

export const STitle = styled.h1`
  font-weight: var(--font-weight-black);
  font-size: 4.2rem;
  color: var(--blue-700);

  @media ${layout.md} {
    font-size: 4.8rem;
  }
`;
