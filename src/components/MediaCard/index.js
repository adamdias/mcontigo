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
import Link from 'next/link';

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

          <Box display="flex" flexDirection="row-reverse">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '15px' }}
            >
              <Link href={`/article/${article.id}`}>
                <S.MyLink>Learn More</S.MyLink>
              </Link>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
