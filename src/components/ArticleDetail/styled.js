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
    width: 100%;
    max-width: 400px;
    height: auto;
    object-fit: cover;

    @media only screen and (max-width: 599px) {
      margin: 10px auto 20px auto;
      max-height: 250px;
    }
  }

  .content-thumb {
    margin: 0 !important;
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
  max-height: 450px;

  @media only screen and (max-width: 900px) {
    max-height: 350px;
  }

  @media only screen and (max-width: 599px) {
    max-height: 250px;
  }
`;

export const MyBoxChip = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;

  & > * {
    margin-right: 5px;
  }
`;
