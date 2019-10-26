import { Container } from '@material-ui/core';
import styled from 'styled-components';

export const MyMarginTop = styled.div`
  margin-top: 100px;
  width: 10px;
  display: block;

  @media only screen and (max-width: 599px) {
    margin-top: 85px;
  }
`;

export const MyContainer = styled(Container)`
  text-align: center;
`;
