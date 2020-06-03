import styled from 'styled-components';

export const Container = styled.div``;

export const NavBar = styled.div`
  svg {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const TopMenu = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const SideMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  transition: opacity 0.3s ease;
`;
