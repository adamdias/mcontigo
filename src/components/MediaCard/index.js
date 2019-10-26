import React from 'react';
import {
  Card,
  CardMedia,
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
        <CardMedia
          component="img"
          alt={article.title}
          height="250"
          image={article.featured_media.large}
          title={article.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {article.title}
          </Typography>

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
