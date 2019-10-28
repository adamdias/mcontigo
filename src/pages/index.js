import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import api from '~/services/api';
import Header from '~/components/Header';
import MediaCard from '~/components/MediaCard';
import Footer from '~/components/Footer';
import { MyBodyContainer } from '~/components/BodyContainer/styled';
import InputSearch from '~/components/InputSearch';
import { Router } from '~/routes';
import HeadSeo from '../components/HeadSeo';

export default function Home() {
  const [txt, setTxt] = useState('');
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

  async function handleSubmit(e) {
    e.preventDefault();

    Router.pushRoute(`/search?txt=${txt}`);
  }

  return (
    <>
      <HeadSeo
        author="https://www.linkedin.com/in/adam-dias/"
        publisher="https://www.linkedin.com/in/adam-dias/"
        section="Home"
        twitter="@mejorsalud"
      />

      <MyBodyContainer>
        <Header />

        {!loading ? (
          <InputSearch
            change={e => setTxt(e.target.value)}
            value={txt}
            submit={e => handleSubmit(e)}
          />
        ) : (
          <Container>
            <Grid container style={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <Skeleton variant="rect" height={100} />
              </Grid>
            </Grid>
          </Container>
        )}

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
                <Skeleton variant="rect" height={250} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Skeleton variant="rect" height={250} />
                <Skeleton />
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
