import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  strong {
    font-size: 36px;
    color: ${(props) => props.theme.colors.secundary};
  }
`;
