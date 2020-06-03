/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import { MdExitToApp, MdLink } from 'react-icons/md';

import { useDispatch } from 'react-redux';
// useSelector,

import { signOut } from '../../store/modules/auth/actions';

import { SideBar } from './styles';

function Menu() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <SideBar>
      <ul>
        <li>
          <div>
            <FaHome size="1.5rem" />
            <span>Home</span>
          </div>
        </li>
        <li>
          <div>
            <FaWhatsapp size="1.5rem" />
            <span>WhatsApp</span>
          </div>
        </li>
        <li>
          <div>
            <MdLink size="1.5rem" />
            <span>Portfolio</span>
          </div>
        </li>
        <li onClick={handleSignOut}>
          <div>
            <MdExitToApp size="1.5rem" />
            SignOut
          </div>
        </li>
      </ul>
    </SideBar>
  );
}

export default Menu;
