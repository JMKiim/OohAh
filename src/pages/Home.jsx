import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <TempWrapper>
        <SLink to='/post'>
          <HomeText>아재개그 발사하기</HomeText>
        </SLink>
        <SLink to='/feeds'>
          <HomeText>아재개그 장전하기</HomeText>
        </SLink>
      </TempWrapper>
    </Layout>
  );
};
export default Home;

const TempWrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const HomeText = styled.div`
  font-weight: bold;
  color: #000;
  background-color: #fff;
  width: 500px;
  height: 500px;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #bb5eb6;
    color: #fff;
  }
`;
const SLink = styled(Link)`
  width: 500px;
  height: 500px;
  font-size: 40px;
  text-decoration: none;
  border-radius: 100%;
  margin: 70px 70px;
  color: black;
`;
