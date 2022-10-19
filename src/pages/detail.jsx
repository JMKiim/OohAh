import React from 'react';
import { useParams } from 'react-router-dom';
import FeedDetail from '../components/feedDetail/feedDetail';
import Layout from '../components/layout/Layout';

const Detail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <FeedDetail id={id} />
    </Layout>
  );
};

export default Detail;
