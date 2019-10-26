import React, { useState } from 'react';
import { Container, InputAdornment, IconButton } from '@material-ui/core';
import IconSearch from '@material-ui/icons/Search';

import * as S from './styled';

export default function Search({ value, change, submit }) {
  return (
    <Container>
      <S.MyPaper style={{ padding: '20px' }}>
        <form onSubmit={submit}>
          <S.MyTextField
            onChange={change}
            value={value}
            label="Pesquisar artigos:"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <IconSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </S.MyPaper>
    </Container>
  );
}
