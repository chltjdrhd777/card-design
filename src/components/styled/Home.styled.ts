import styled from "@emotion/styled/macro";

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grayFour};
`;

export const Container = styled.div`
  max-width: 98rem;
  padding: 1.5rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20.5rem, 1fr));
  grid-gap: 1.5rem;
`;

export const Card = styled.div`
  font-family: sans-serif;
  background-color: ${({ theme }) => theme.colors.footerColor};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover {
    & > .card-title-large {
      transform: translateX(-150%);
      color: white;
    }

    & > .card-cta {
      & i {
        animation: arrowMove 0.5s infinite alternate;
      }
    }
  }

  /* children */
  & > .card-title-large {
    font-family: open-sans;
    font-size: 18rem;
    letter-spacing: 0.5rem;
    transform: translateX(7rem);
    color: #1d1d1d;
    transition: transform 5s;
  }

  & > .card-title-small {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  & > .card-description {
    font-size: 1.2rem;
    line-height: 1.5;
    position: relative;
    overflow: hidden;
  }

  & > .card-cta {
    display: inline-block;
    margin-top: 2rem;
    align-self: flex-end;
    cursor: pointer;
  }

  /* css conditional */
  &.twitter:hover {
    background-color: ${({ theme }) => theme.colors.pointColorBlue};
  }

  &.instagram:hover {
    background-image: radial-gradient(at 20% 120%, #feda78 20%, #e23467 60%, #ac2bb3);
  }

  &.facebook:hover {
    background-image: linear-gradient(30deg, #efe0, #feda21);
  }

  &.youtube:hover {
    background-color: ${({ theme }) => theme.colors.pointColorCarrot};
  }

  @keyframes arrowMove {
    0% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }
`;
