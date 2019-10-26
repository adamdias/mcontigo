import React from 'react';
import { CssBaseline, AppBar, Toolbar, Container } from '@material-ui/core';
import * as S from './styled';

import imgLogo from '../../public/logo.svg';

export default function Header() {
  return (
    <>
      <CssBaseline />

      <AppBar>
        <Toolbar>
          <Container justifyContent="center">
            <imgLogo />
          </Container>
        </Toolbar>
      </AppBar>

      <S.MarginTop />
    </>
  );
}
