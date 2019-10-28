import React from 'react';
import Head from 'next/head';

export default function HeadSeo({
  title = 'Home - Mcontigo',
  description = 'Esta es mi descripción de este sitio',
  img = '',
  url = '',
  author = '',
  publisher = '',
  siteName = 'Mcontigo',
  locale = 'es_ES',
  twitter = '',
  section = '',
  tag = '',
  baseURL = 'http://localhost:9045',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="url" content={`${baseURL}${url}`} />
      <meta itemProp="image" content={img} />

      <link rel="canonical" href={`${baseURL}${url}`} />
      <link rel="base" href={baseURL} />
      <link rel="author" href={author} />
      <link rel="publisher" href={publisher} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={`${baseURL}${url}`} />
      <meta property="og:type" content="article" />

      <meta property="article:author" content={author} />
      <meta property="article:publisher" content={publisher} />
      <meta property="article:section" content={section} />
      <meta property="article:tag" content={tag} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={twitter} />
      <meta property="twitter:domain" content={baseURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={img} />
      <meta property="twitter:url" content={`${baseURL}${url}`} />
    </Head>
  );
}
