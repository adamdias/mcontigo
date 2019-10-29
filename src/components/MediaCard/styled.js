import { CardMedia, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const MyLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const MyCardMedia = styled(CardMedia)`
  height: 300px;

  @media only screen and (max-width: 900px) {
    height: 200px;
  }

  @media only screen and (max-width: 599px) {
    height: 250px;
  }
`;

export const MyTypography = styled(Typography)`
  @media only screen and (max-width: 900px) {
    font-size: 20px !important;
  }

  @media only screen and (max-width: 660px) {
    font-size: 18px !important;
  }

  @media only screen and (max-width: 599px) {
    font-size: 22px !important;
  }
`;
