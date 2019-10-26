import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';

import { Link } from '~/routes';
import * as S from './styled';
import ImgLogo from '~/public/logo.svg';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('onRouteChangeError', () => NProgress.done());

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
            <Link route="/">
              <a>
                <ImgLogo style={{ cursor: 'pointer' }} />
              </a>
            </Link>
          </S.MyContainer>
        </Toolbar>
      </AppBar>

      <S.MyMarginTop />
    </>
  );
}
