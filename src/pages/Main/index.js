import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <strong>Welcome</strong>
        <h1>{profile.name}</h1>
        <button type="button" onClick={handleSignOut}>
          Log Out
        </button>
      </Content>
    </Container>
  );
}
