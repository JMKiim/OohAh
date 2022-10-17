import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'

const HomeText = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SLink = styled(Link)`
    text-decoration: none;
    color:black;
`

const Home = () => {
  return (
    <Layout>
      <SLink><HomeText>아재개그 발사하기</HomeText></SLink>
      <SLink><HomeText>아재개그 장전하기</HomeText></SLink>
    </Layout>
  )
}
export default Home