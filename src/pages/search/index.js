import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import api from '~/services/api';
import { MyBodyContainer } from '~/components/BodyContainer/styled';
import MediaCard from '~/components/MediaCard';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import InputSearch from '~/components/InputSearch';

function Search({ txt }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const { data } = await api.get(`/posts?search=${txt}&orderby=relevance`);

      setArticles(data);
      setLoading(false);
    }

    loadArticles();
  }, [txt]);

  return (
    <>
      <Head>
        <title>{txt} - Mcontigo</title>
      </Head>

      <MyBodyContainer>
        <Header />

        {!loading && <InputSearch />}

        <Container>
          {!loading ? (
            <Grid container spacing={3}>
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
        </Container>

        <Footer />
      </MyBodyContainer>
    </>
  );
}

Search.getInitialProps = async ({ query }) => {
  return {
    txt: query.txt,
  };
};

export default Search;
