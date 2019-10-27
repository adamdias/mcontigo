import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';

import api from '~/services/api';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { MyBodyContainer } from '~/components/BodyContainer/styled';
import ArticleDetails from '~/components/ArticleDetails';

function Article({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} - Mcontigo</title>
      </Head>

      <MyBodyContainer>
        <Header />

        <Container>
          <ArticleDetails article={article} />
        </Container>

        <Footer />
      </MyBodyContainer>
    </>
  );
}

Article.getInitialProps = async ({ query, res }) => {
  try {
    const { data: article } = await api.get(`/posts/${query.id}`);

    return {
      article,
    };
  } catch (err) {
    res.writeHead(302, {
      Location: '/',
    });

    return res.end();
  }
};

export default Article;
