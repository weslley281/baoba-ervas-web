import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    aside {
      flex: 0.5;
      background-color: blue;
    }
  }

  @media only screen and (max-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;

      aside {
        flex: 1;
        background-color: blue;
      }
    }
  }
`;
