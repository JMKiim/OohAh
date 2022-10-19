import styled from 'styled-components';

export const PostSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 80vw;
  background-color: white;
  padding: 5em;
`;

export const PostForm = styled.form`
  width: 100%;
  height: 100%;
  flex-direction: column;
  -ms-flex-align: center;
  justify-content: center;
`;

export const PostText = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
  background-color: #d3d3d3;  
`;

export const PostText2 = styled.textarea`
  width: 100%;
  height: 220px;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
  background-color: #d3d3d3;  
`;

export const PostInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
  background-color: #d3d3d3;
`;

export const ButtonGroup = styled.div`
  width: 180px;
  float: right;
  display: flex;
  justify-content: space-between;
`