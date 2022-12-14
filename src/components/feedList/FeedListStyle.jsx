import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SFeedList = styled.div`
  background-color: #D9D9D9;
  width: 1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px 0 10px;
  border-radius: 10px;
  
`
export const STop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
`
export const SLink = styled(Link)`
    text-decoration: none;
    color:black;
`
export const Sicon = styled.i`
  width: 30px;
  height: 30px;
`
export const TextType = styled.p`
  font-weight: bold;
  font-size: 25px;
`

export const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
`
export const PageLi = styled.li`
  display: inline-block;
  color:red;
  font-size: 20px;
  font-weight: 600;
  border-radius: 100%;
  padding: 10px 20px;
  margin-right:10px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #bb5eb6;
  }
`
export const PageSpan = styled.span`
  &:hover{
    border-radius: 100%;
    color: white;
  }
`