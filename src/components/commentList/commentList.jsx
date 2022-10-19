import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getCommentsByFeedId } from '../../redux/modules/commentsSlice';
import Comment from '../comment/comment';
import CommentForm from '../commentForm/commentForm';
import styled from 'styled-components';

const ListSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const ListHr = styled.hr`
  margin-top: 10px;
`;

const CommentList = ({ feedId }) => {
  const [onUpdateId, setOnUpdateId] = useState(0);
  const DPComments = useSelector((state) => state.comments.commentsByFeedId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCommentsByFeedId(feedId));
  }, []);

  return (
    <>
      <ListSpan>댓글 목록 ({DPComments.data.length})</ListSpan>
      <CommentForm feedId={feedId} />
      <ListHr />
      {DPComments.data.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment
              idOnUpdate={onUpdateId}
              idHandler={setOnUpdateId}
              comment={comment}
            />
            <ListHr />
          </div>
        );
      })}
    </>
  );
};

export default CommentList;
