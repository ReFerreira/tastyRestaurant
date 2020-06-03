import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import usePersistedState from '../../../utils/usePersistedState';

import light from '../../../styles/themes/light';
import dark from '../../../styles/themes/dark';

import Header from '../../../components/Header';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header toggleTheme={toggleTheme} />
        {children}
      </Wrapper>
    </ThemeProvider>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
