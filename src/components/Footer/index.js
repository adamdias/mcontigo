import React from 'react';
import { Container, Typography } from '@material-ui/core';

import * as S from './styled';

export default function Footer() {
  return (
    <S.MyFooter>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © Mcontigo {new Date().getFullYear()}
        </Typography>
      </Container>
    </S.MyFooter>
  );
}
