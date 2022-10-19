import React from 'react';
import { useParams } from 'react-router-dom';
import FeedDetail from '../components/feedDetail/feedDetail';

const Detail = () => {
  const { id } = useParams();
  return <FeedDetail id={id} />;
};

export default Detail;
