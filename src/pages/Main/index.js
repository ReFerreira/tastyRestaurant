import React from 'react';

import { Container, Content } from './styles';

export default function Main() {
  const name = localStorage.getItem('name');

  return (
    <Container>
      <Content>
        <strong>Welcome {name}</strong>
      </Content>
    </Container>
  );
}
