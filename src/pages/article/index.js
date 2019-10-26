import React from 'react';
import { Container } from '@material-ui/core';

import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MyBodyContainer } from '../../components/BodyContainer/styled';
import ArticleDetails from '../../components/ArticleDetails';

function Article({ article }) {
  return (
    <MyBodyContainer>
      <Header />

      <Container>
        <ArticleDetails article={article} />
      </Container>

      <Footer />
    </MyBodyContainer>
  );
}

Article.getInitialProps = async ({ query, res }) => {
  const { data: article } = await api.get(`/posts/${query.id}`).catch(() => {
    res.writeHead(302, {
      Location: '/',
    });

    return res.end();
  });

  return {
    article,
  };
};

export default Article;
