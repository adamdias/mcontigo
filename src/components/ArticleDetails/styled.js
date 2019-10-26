import { CardMedia } from '@material-ui/core';
import styled from 'styled-components';

export const MyDetails = styled.div`
  font-size: 16px;

  p {
    margin-top: 20px;
  }

  img {
    display: block;
    margin: 25px auto;
    max-width: 250px;
    max-height: 250px;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: #449dd1;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const MyCardMedia = styled(CardMedia)`
  max-height: 420px;

  @media only screen and (max-width: 800px) {
    max-height: 350px;
  }

  @media only screen and (max-width: 599px) {
    max-height: 250px;
  }
`;
