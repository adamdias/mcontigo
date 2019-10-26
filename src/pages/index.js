import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Head from 'next/head';

import api from '~/services/api';
import Header from '~/components/Header';
import MediaCard from '~/components/MediaCard';
import Footer from '~/components/Footer';
import { MyBodyContainer } from '~/components/BodyContainer/styled';
import InputSearch from '~/components/InputSearch';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const { data } = await api.get('/posts?orderby=relevance');

      setLoading(false);
      setArticles(data);
    }

    loadArticles();
  }, []);

  return (
    <>
      <Head>
        <title>Página inicial - Mcontigo</title>
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
