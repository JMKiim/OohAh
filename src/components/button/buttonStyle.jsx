import styled from 'styled-components';

export const DetailNavBtn = styled.button`
  background-color: whitesmoke;
  font-size: var(--font-medium);
  padding: 10px 30px;
  border-radius: 30px;
`;

export const FeedUpdateBtn = styled.button`
  background-color: var(--color-pink);
  font-size: var(--font-regular);
  padding: 5px 15px;
  border-radius: 10px;
  transition: all var(--animation-duration) ease-in;
  &:hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export const HomeNavBtn = styled.button`
  background-color: var(--color-pink);
  font-size: var(--font-regular);
  color: var(--color-white);
  padding: 5px 15px;
  border-radius: 10px;
  transition: all var(--animation-duration) ease-in;
  &:hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export const FeedPostBtn = styled.button`
  background-color: var(--color-pink);
  font-size: var(--font-regular);
  color: var(--color-white);
  padding: 5px 15px;
  border-radius: 10px;
  transition: all var(--animation-duration) ease-in;
  &:hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export const ListGo = styled.button`
  background-color: var(--color-pink);
  font-size: var(--font-regular);
  color: var(--color-white);
  padding: 5px 15px;
  border-radius: 10px;
  transition: all var(--animation-duration) ease-in;
  &:hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export const CommentBtn = styled.button`
  border: none;
  border-radius: 50%;
  background-color: var(--color-dark-white);
  font-size: var(--font-medium);
  padding: 5px;
  margin-left: 10px;
`;
