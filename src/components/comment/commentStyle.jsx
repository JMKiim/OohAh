import styled from 'styled-components';

export const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const ContentSet = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const CommentUserName = styled.span`
  font-size: 15px;
  margin-bottom: 3px;
`;
export const CommentContent = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const BtnSet = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUpdateInput = styled.input`
  font-size: var(--font-regular);
  height: 46px;
  margin: 2px 0;
`;
