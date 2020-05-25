import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <h1>{profile.name}</h1>
      <button type="button" onClick={handleSignOut}>
        Sair do sistema
      </button>
    </Container>
  );
}
