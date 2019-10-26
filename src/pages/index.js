import React from 'react';
import { Container } from '@material-ui/core';

import Header from '../components/Header';
import MediaCard from '../components/MediaCard';

export default function Home() {
  return (
    <div>
      <Header />

      <Container>
        <MediaCard />
      </Container>
    </div>
  );
}
