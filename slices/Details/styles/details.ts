import styled from 'styled-components';
import { layout } from '~/styles';

// Components
import Icon from '~/components/Icon';
import Title from '~/components/Title';
import Subtitle from '~/components/Subtitle';

export const SContainer = styled.div`
  margin-top: 4.3rem;
  margin-bottom: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  max-width: 71rem;

  @media ${layout.md} {
    margin: 8rem auto 10rem;
  }

  .GoBackLink {
    display: flex;
    align-items: center;
    color: var(--blue-400);
    font-size: 2.2rem;
    font-weight: var(--font-weight-bold);
    text-decoration: none;

    &:hover {
      .GoBackIcon {
        transform: translateX(-0.5rem);
      }
    }
  }
`;

export const SIcon = styled(Icon)`
    margin-right: 0.8rem;
    transition: transform 250ms;
    transform: translateX(0rem);
`;

export const STitle = styled(Title)`
    margin-top: 1.8rem;
    margin-bottom: 1rem;

    @media ${layout.md} {
      margin-top: 2.4rem;
    }
`;

export const SDescription = styled(Subtitle)`
    margin-bottom: 5rem;

  @media ${layout.md} {
    margin-bottom: 7.5rem;
  }
`;