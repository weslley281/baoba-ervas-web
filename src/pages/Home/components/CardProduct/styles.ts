import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 300px;
  height: 300px;
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
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
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
`;
