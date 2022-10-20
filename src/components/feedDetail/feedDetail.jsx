import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { __getFeed } from '../../redux/modules/feedSlice';

import Button from '../button/button';
import CommentList from '../commentList/commentList';
import {
  FeedSection,
  FeedHeader,
  FeedBody,
  FeedLine,
  FeedUserName,
  FeedContent,
} from './feedDetailStyle';

const FeedDetail = ({ id }) => {
  const TargetFeed = useSelector((state) => state.feed.feed);
  const TargetError = useSelector((state) => state.feed.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //console.log('feedDetail useEffect!');
    dispatch(__getFeed(id));
  }, [dispatch, id]);

  if (TargetError !== null) {
    navigate('/');
    //alert('Error: 없는 게시글 번호입니다.');
  }

  return (
    <FeedSection>
      <FeedHeader>
        <h1>{TargetFeed.title}</h1>
        <h2>글 번호 : {TargetFeed.id}</h2>
        <Button btnType='DetailNav'>돌아가기</Button>
      </FeedHeader>
      <FeedBody>
        <FeedLine>
          <FeedUserName>작성자 : {TargetFeed.username}</FeedUserName>
          <Link to={`/update/${id}`}>
            <Button btnType='FeedUpdate'>수정하기</Button>
          </Link>
        </FeedLine>
        <FeedContent>{TargetFeed.body}</FeedContent>
        <CommentList feedId={id} />
      </FeedBody>
    </FeedSection>
  );
};

export default FeedDetail;
