import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  section {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;

    aside {
      flex: 0.5;
      height: calc(100vh);

      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      .details {
        padding: 20% 5%;

        h1 {
          font-size: 2rem;
          color: ${({ theme }) => theme.main};
        }

        .price {
          padding: 10px;
          display: flex;
          flex-direction: row-reverse;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .descripition {
          padding: 50px;
          font-size: 1.2rem;
        }
      }
    }
  }

  .more {
  }

  @media only screen and (max-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;

      aside {
        padding: 50px;
        flex: 1;

        .image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .details {
          padding: 2%;

          h1 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
