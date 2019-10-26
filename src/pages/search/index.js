import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { Router } from '~/routes';
import api from '~/services/api';
import { MyBodyContainer } from '~/components/BodyContainer/styled';
import MediaCard from '~/components/MediaCard';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import InputSearch from '~/components/InputSearch';
import Pagination from '~/components/Pagination';

function Search({ txt: paramTxt, page = 1 }) {
  const [totalResults, setTotalResults] = useState(0);
  const [txt, setTxt] = useState(paramTxt);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function loadArticles() {
      const { data, headers } = await api.get('/posts', {
        params: {
          orderby: 'relevance',
          search: paramTxt,
          page,
        },
      });

      setLoading(false);
      setTotalResults(headers['x-mc-total-items']);
      setTotalPages(headers['x-mc-total-pages']);
      setArticles(data);
    }

    loadArticles();
  }, [page, paramTxt]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    Router.pushRoute(`/search?txt=${txt}`);
  }

  async function handlePageChange(button) {
    setLoading(true);

    Router.pushRoute(`/search?txt=${paramTxt}&page=${button.selected + 1}`);
  }

  return (
    <>
      <Head>
        <title>{txt} - Mcontigo</title>
      </Head>

      <MyBodyContainer>
        <Header />

        {!loading && (
          <InputSearch
            change={e => setTxt(e.target.value)}
            value={txt}
            submit={e => handleSubmit(e)}
          />
        )}

        <Container>
          {!loading ? (
            <>
              <Typography component="p" variant="body1">
                Su búsqueda obtuvo {totalResults} resultados...
              </Typography>

              <Grid
                container
                spacing={3}
                style={{ marginTop: '10px', marginBottom: '20px' }}
              >
                {articles
                  ? articles.map(article => (
                      <MediaCard
                        key={article.id}
                        article={article}
                        xs={12}
                        sm={6}
                      />
                    ))
                  : 'Not exists articles'}
              </Grid>
            </>
          ) : (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Skeleton variant="rect" height={118} />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Skeleton variant="rect" height={118} />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            </Grid>
          )}

          {!loading && page && totalPages > 1 && articles ? (
            <Pagination
              nextLabel="&#10095;"
              previousLabel="&#10094;"
              containerClassName="pagination-default"
              activeLinkClassName="active"
              pageCount={totalPages}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={button => handlePageChange(button)}
              forcePage={page - 1}
            />
          ) : null}
        </Container>

        <Footer />
      </MyBodyContainer>
    </>
  );
}

Search.getInitialProps = async ({ query }) => {
  return {
    txt: query.txt,
    page: query.page,
  };
};

export default Search;
