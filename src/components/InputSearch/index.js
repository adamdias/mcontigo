import React, { useState } from 'react';
import { Container, InputAdornment, IconButton } from '@material-ui/core';
import IconSearch from '@material-ui/icons/Search';

import { Router } from '~/routes';
import * as S from './styled';

export default function Search() {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    Router.pushRoute(`/search?txt=${search}`);
  }

  return (
    <Container>
      <S.MyPaper style={{ padding: '20px' }}>
        <form onSubmit={e => handleSubmit(e)}>
          <S.MyTextField
            onChange={e => setSearch(e.target.value)}
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
