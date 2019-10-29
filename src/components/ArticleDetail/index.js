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
  const {
    articleSection,
    dateModified,
    datePublished,
    description,
    headline,
    url,
    author,
    image,
    publisher,
  } = article.metas.schema;

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
          title={article.title}
          alt={article.title}
          image={
            article.featured_media && article.featured_media.medium_large
              ? article.featured_media.medium_large
              : ''
          }
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

          <S.MyDetails
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />

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
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>

      <span itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="articleSection" content={articleSection} />
        <meta itemProp="dateModified" content={dateModified} />
        <meta itemProp="datePublished" content={datePublished} />
        <meta itemProp="description" content={description} />
        <meta itemProp="headline" content={headline} />
        <meta itemProp="url" content={url} />

        {image && (
          <span
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="url" content={image.url} />
            <meta itemProp="height" content={image.height} />
            <meta itemProp="width" content={image.width} />
          </span>
        )}

        {publisher && (
          <span
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content={publisher.name} />
            <meta
              itemProp="sameAs"
              content={
                publisher.sameAs && publisher.sameAs[0]
                  ? publisher.sameAs[0]
                  : ''
              }
            />

            <span
              itemProp="contactPoint"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
              <meta
                itemProp="contactType"
                content={
                  publisher.contactPoint && publisher.contactPoint.contactType
                }
              />
              <meta
                itemProp="telephone"
                content={
                  publisher.contactPoint && publisher.contactPoint.telephone
                }
              />
              <meta
                itemProp="url"
                content={publisher.contactPoint && publisher.contactPoint.url}
              />
            </span>
          </span>
        )}

        {author && (
          <span
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <meta itemProp="name" content={author.name} />
            <meta itemProp="url" content={author.url} />
            <meta
              itemProp="sameAs"
              content={
                author.sameAs && author.sameAs[0] ? author.sameAs[0] : ''
              }
            />
            <span
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <meta itemProp="url" content={author.image && author.image.url} />
              <meta
                itemProp="height"
                content={author.image && author.image.height}
              />
              <meta
                itemProp="width"
                content={author.image && author.image.width}
              />
            </span>
          </span>
        )}
      </span>
    </Container>
  );
}
