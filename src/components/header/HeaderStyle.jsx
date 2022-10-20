import styled from "styled-components"
import { Link } from 'react-router-dom'

export const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content:space-between ; */
  background-color: #ffffff;
  
  padding: 0 20px 0 20px;
  max-width: 100%;
  height: 180px;
`
export const Sicon = styled.i`
  width: 40px;
  height: 40px;
`
export const HeaderText = styled.div`
  font-weight: bold;
  font-size: 22px;
`
export const SLink = styled(Link)`
    text-decoration: none;
    color:black;
`