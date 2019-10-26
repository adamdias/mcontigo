import React from 'react';
import { Container, InputAdornment, IconButton } from '@material-ui/core';
import IconSearch from '@material-ui/icons/Search';

import * as S from './styled';

export default function Search() {
  return (
    <Container>
      <S.MyPaper style={{ padding: '20px' }}>
        <S.MyTextField
          label="Pesquisar artigos:"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <IconSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </S.MyPaper>
    </Container>
  );
}
