import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ ...props }) {
  return <ReactPaginate {...props} />;
}
