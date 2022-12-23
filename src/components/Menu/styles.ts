import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.main};
  display: flex;
  flex: 1;

  .topnav {
    overflow: hidden;

    a {
      float: left;
      display: block;
      color: ${({ theme }) => theme.white};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;

      &:hover,
      .dropdown:hover .dropbtn {
        background-color: ${({ theme }) => theme.secondary};
        color: white;
        border-radius: 6px;
      }
    }

    .active {
      background-color: ${({ theme }) => theme.main};
      color: white;
    }

    .icon {
      display: none;
    }

    .dropdown {
      float: left;
      overflow: hidden;

      .dropbtn {
        font-size: 17px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: ${({ theme }) => theme.white};
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        border-radius: 6px;

        a {
          float: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;

          &:hover {
            background-color: ${({ theme }) => theme.secondary};
            color: black;
          }
        }
      }
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }

    .home {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
