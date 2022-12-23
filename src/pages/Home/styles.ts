import styled from 'styled-components';

export const ContainerPrimcipal = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  section {
    width: 100%;

    .content {
      padding: 100px 50px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem 1rem;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (max-width: 600px) {
      .content {
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem 1rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
