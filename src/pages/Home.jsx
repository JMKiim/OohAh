import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'

const Home = () => {
  return (
    <Layout>
      <SLink to='/add'><HomeText>아재개그 발사하기</HomeText></SLink>
      <SLink to='/feeds'><HomeText>아재개그 장전하기</HomeText></SLink>
    </Layout>
  )
}
export default Home

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
  margin: 120px 50px 0 50px;
  &:hover{
    background-color: #bb5eb6;
    color: #fff;
    
  }
`
const SLink = styled(Link)`
    font-size: 40px;
    text-decoration: none;
    color:black;
`