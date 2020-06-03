import styled from 'styled-components';

export const SideBar = styled.div`
  background: ${(props) => props.theme.colors.primary};
  list-style: none;
  position: fixed;
  width: 20rem;
  height: 100vh;
  transition: all 0.3s ease;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #4360b5;
    }

    div {
      margin: 30px;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      position: relative;
      margin-bottom: 1px;
      color: #eee;

      button {
        cursor: pointer;
        background: ${(props) => props.theme.colors.primary};
      }
    }

    div::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0.3rem;
      height: 100vh;
      display: none;
      background: ${(props) => props.theme.colors.primary};
    }
    svg {
      margin-right: 10px;
      display: inline-block;
    }

    span {
      text-transform: uppercase;
      display: inline-block;
    }
  }
`;
