import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';

import * as S from './styled';
import ImgLogo from '~/public/logo.svg';

export default function Header() {
  return (
    <>
      <Typography style={{ fontSize: 0 }} component="h1">
        Mcontigo
      </Typography>

      <CssBaseline />

      <AppBar>
        <Toolbar>
          <S.MyContainer>
            <ImgLogo />
          </S.MyContainer>
        </Toolbar>
      </AppBar>

      <S.MyMarginTop />
    </>
  );
}
