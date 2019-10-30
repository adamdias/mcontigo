import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
} from '@material-ui/core';

import { Link } from '~/routes';
import * as S from './styled';

export default function MediaCard({ article, xs, sm }) {
  return (
    <Grid item xs={xs} sm={sm}>
      <Card component="article">
        <S.MyCardMedia
          component="img"
          alt={article.title}
          image={
            article.featured_media && article.featured_media.medium_large
              ? article.featured_media.medium_large
              : ''
          }
          title={article.title}
        />

        <CardContent>
          <S.MyTypography gutterBottom variant="h5" component="h1">
            {article.title}
          </S.MyTypography>

          <Typography variant="body2" color="textSecondary" component="p">
            {article.excerpt}
          </Typography>

          <Box
            display="flex"
            flexDirection="row-reverse"
            style={{ marginTop: '15px' }}
          >
            <Link route="article" params={{ id: article.id }} passHref>
              <S.MyLink>
                <Button variant="contained" color="primary">
                  Sepa mas
                </Button>
              </S.MyLink>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
