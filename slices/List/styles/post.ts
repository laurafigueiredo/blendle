import styled from 'styled-components';
import { layout } from '~/styles';

export const SContainer = styled.div`
  padding: 2.8rem 2.4rem;
  background-color: var(--white);
  border-top: 0.1rem solid var(--grey-200);

  &:last-of-type {
    border-bottom: 0.1rem solid var(--grey-200);
  }

  @media ${layout.md} {
    margin-bottom: 2.4rem;
    border: 0.1rem solid var(--grey-200);
    border-radius: 0.4rem;
  }
`;

export const STextWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  text-decoration: none;

  .askLink {
    font-weight: var(--font-weight-bold);
    font-size: 1.6rem;
    color: var(--blue-400);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media ${layout.md} {
      font-size: 1.8rem;
    }
  }
`;

export const STitle = styled.a`
  font-weight: var(--font-weight-bold);
  font-size: 2rem;
  color: var(--blue-700);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media ${layout.md} {
    font-size: 2.4rem;
  }
`;

export const SPoints = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.6rem;
  color: var(--grey-500);
  font-weight: var(--font-weight-bold);

  @media ${layout.md} {
    font-size: 1.8rem;
  }
`;

export const SPointsText = styled.span`
  font-weight: var(--font-weight-regular);
`;

export const SBullet = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
