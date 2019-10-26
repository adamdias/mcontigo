import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
} from '@material-ui/core';

import * as S from './styled';

export default function ArticleDetails({ article }) {
  return (
    <Container maxWidth="md">
      <Card component="article">
        <S.MyCardMedia
          component="img"
          alt={article.title}
          image={article.featured_media.medium_large}
          title={article.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h4" component="h1">
            {article.title}
          </Typography>

          <Divider />

          <S.MyDetails dangerouslySetInnerHTML={{ __html: article.content }} />
        </CardContent>
      </Card>
    </Container>
  );
}
