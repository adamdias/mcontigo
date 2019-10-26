import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import api from '../services/api';
import Header from '../components/Header';
import MediaCard from '../components/MediaCard';
import Footer from '../components/Footer';
import { MyBodyContainer } from '../components/BodyContainer/styled';

export default function Home() {
  // const Router = useRouter();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      const { data } = await api.get('/posts?orderby=relevance');

      setLoading(true);
      setArticles(data);
    }

    loadPosts();
  }, []);

  return (
    <MyBodyContainer>
      <Header />

      <Container>
        {loading ? (
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
  );
}
