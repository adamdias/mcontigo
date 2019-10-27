import React from 'react';
import { format, parseISO, isValid } from 'date-fns';
import es from 'date-fns/locale/es';

import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Grid,
  Avatar,
} from '@material-ui/core';

import * as S from './styled';

export default function ArticleDetails({ article }) {
  const date = parseISO(article.published);
  const datePublish = isValid(date)
    ? format(date, "dd 'de' MMMM' de' yyyy 'a las' HH:mm'h'", {
        locale: es,
      })
    : null;

  return (
    <Container maxWidth="md">
      <Card component="article">
        <S.MyCardMedia
          component="img"
          alt={article.title}
          image={
            article.featured_media && article.featured_media.large
              ? article.featured_media.large
              : ''
          }
          title={article.title}
        />

        <CardContent>
          <Typography gutterBottom variant="caption" component="p">
            publicado en {datePublish}
          </Typography>

          <Typography gutterBottom variant="h4" component="h1">
            {article.title}
          </Typography>

          <S.MyBoxChip>
            {article.categories &&
              article.categories.map(cat => (
                <Chip key={cat.id} size="small" label={cat.name} />
              ))}
          </S.MyBoxChip>

          <Divider />

          <S.MyDetails dangerouslySetInnerHTML={{ __html: article.content }} />

          <Divider />

          {article.tags.length > 0 && (
            <S.MyBoxChip style={{ marginTop: '15px' }}>
              <Typography
                style={{ marginRight: '15px' }}
                gutterBottom
                variant="body2"
                component="p"
              >
                Tags:
              </Typography>

              {article.tags.map(tag => (
                <Chip
                  key={tag.id}
                  color="primary"
                  size="small"
                  label={tag.name}
                />
              ))}
            </S.MyBoxChip>
          )}

          {article.author && (
            <Grid
              container
              style={{
                marginTop: '20px',
                background: '#f5f5f5',
                padding: '30px',
                borderTop: '4px solid #aaa',
              }}
            >
              <Grid item>
                <Avatar
                  style={{ width: '80px', height: '80px' }}
                  alt={article.author.name}
                  src={article.author.picture}
                />
              </Grid>

              <Grid item>
                <Typography gutterBottom variant="h5" component="p">
                  {article.author.name}
                </Typography>

                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: article.author.description,
                  }}
                />

                {article.bibliography && (
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{
                      __html: article.bibliography,
                    }}
                  />
                )}
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
