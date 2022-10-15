import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getCommentsByFeedId } from '../../redux/modules/commentsSlice';
import Comment from '../comment/comment';
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
  const TargetComments = useSelector(
    (state) => state.comments.commentsByFeedId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCommentsByFeedId(feedId));
  }, [dispatch, feedId]);

  //console.log(TargetComments);
  return (
    <>
      <ListSpan>댓글 목록 ({TargetComments.data.length})</ListSpan>
      {TargetComments.data.map((comment) => {
        //console.log(comment);
        return (
          <div key={comment.id}>
            <ListHr />
            <Comment
              idOnUpdate={onUpdateId}
              idHandler={setOnUpdateId}
              comment={comment}
            />
          </div>
        );
      })}
      <ListHr />
    </>
  );
};

export default CommentList;
