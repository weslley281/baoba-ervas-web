import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  border-radius: 6px;
`;

export const ImageProduct = styled.img`
  height: 200px;
  border-radius: 8px;
`;

export const CardFooter = styled.footer`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;

  p {
    color: ${({ theme }) => theme.textDark};
  }

  .name {
    font-size: 1.2rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .actions {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .buy-button {
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    place-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;
