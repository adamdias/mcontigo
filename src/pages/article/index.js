import React from 'react';
import { Container } from '@material-ui/core';

import api from '~/services/api';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { MyBodyContainer } from '~/components/BodyContainer/styled';
import ArticleDetail from '~/components/ArticleDetail';
import HeadSeo from '../../components/HeadSeo';

function Article({ article }) {
  return (
    <>
      <HeadSeo
        title={article.metas.title}
        description={article.description}
        img={article.metas['og:image:secure_url']}
        url={`/article/${article.id}`}
        author={article.author.url}
        publisher={article.metas['article:publisher']}
        section={article.metas['article:section']}
        tag={article.metas['article:tag']}
        twitter={article.metas['twitter:creator']}
        siteName={article.metas['og:site_name']}
        locale={article.metas['og:locale']}
      />

      <MyBodyContainer>
        <Header />

        <Container>
          <ArticleDetail article={article} />
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
