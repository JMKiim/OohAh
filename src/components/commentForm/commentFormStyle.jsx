import styled from 'styled-components';

export const CommentFormBox = styled.form`
  background-color: var(--color-pink);
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 5px;
`;
export const CommentFormFirstLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const UserNameInput = styled.input`
  border: none;
  border-radius: 4px;
  height: 25px;
`;
export const CommentContentInput = styled.textarea`
  border: none;
  border-radius: 4px;
  resize: none;
  width: 100%;
  height: 70px;
  font-size: var(--font-small);
`;
export const CommentSlogan = styled.span`
  font-size: var(--font-regular);
  font-weight: ${(props) => (props.isRed ? '700' : '400')};
  color: ${(props) => (props.isRed ? 'red' : 'black')};
`;
