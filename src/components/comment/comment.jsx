import React, { useState } from 'react';
import Button from '../button/button';
import {
  CommentBox,
  ContentSet,
  CommentUserName,
  CommentContent,
  BtnSet,
  CommentUpdateInput,
} from './commentStyle';
import useInput from '../../hooks/useInput';
import {
  __updateComment,
  __deleteComment,
} from '../../redux/modules/commentsSlice';
import { useDispatch } from 'react-redux';

const Comment = ({ idOnUpdate, idHandler, comment }) => {
  const dispatch = useDispatch();
  const [content, onChangeContentHandler] = useInput(comment.content);
  const [dpContent, setDpContent] = useState(comment.content);

  const isDisabled =
    idOnUpdate === 0 ? false : idOnUpdate === comment.id ? false : true;
  const onUpdate =
    idOnUpdate === 0 ? false : idOnUpdate === comment.id ? true : false;

  const toggleOnUpdate = (arg) => {
    idHandler(arg);
  };
  const handleOnUpdateComment = () => {
    dispatch(__updateComment({ ...comment, content }));
    setDpContent(content);
    idHandler(0);
  };
  const handleOnDeleteComment = () => {
    //console.log(`넘겨주는 comment.id : ${comment.id}`);
    dispatch(__deleteComment(comment.id));
  };
  //   return (
  //     <ContentSet>
  //       <CommentUserName>{comment.username}</CommentUserName>
  //       <CommentContent>{comment.content}</CommentContent>
  //     </ContentSet>
  //   );
  // };
  // const OnUpdateContentSet = () => {
  //   return (
  //     <ContentSet>
  //       <CommentUpdateInput onChange={onChangeContentHandler} value={content} />
  //     </ContentSet>
  //   );
  // };

  const NotOnUpdateBtnSet = () => {
    return (
      <BtnSet>
        <Button
          disabled={isDisabled}
          btnType='Comment'
          onClick={() => toggleOnUpdate(comment.id)}
        >
          <i className='fa-solid fa-wrench'></i>
        </Button>
        <Button
          disabled={isDisabled}
          btnType='Comment'
          onClick={handleOnDeleteComment}
        >
          <i className='fa-solid fa-trash-can'></i>
        </Button>
      </BtnSet>
    );
  };

  const OnUpdateBtnSet = () => {
    return (
      <BtnSet>
        <Button
          disabled={isDisabled}
          btnType='Comment'
          onClick={() => toggleOnUpdate(0)}
        >
          <i className='fa-solid fa-ban'></i>
        </Button>
        <Button
          disabled={isDisabled}
          btnType='Comment'
          onClick={handleOnUpdateComment}
        >
          <i className='fa-regular fa-circle-check'></i>
        </Button>
      </BtnSet>
    );
  };

  return (
    <CommentBox>
      <ContentSet>
        {onUpdate === true ? (
          <CommentUpdateInput
            onChange={onChangeContentHandler}
            value={content}
          />
        ) : (
          <>
            <CommentUserName>{comment.username}</CommentUserName>
            <CommentContent>{dpContent}</CommentContent>
          </>
        )}
      </ContentSet>
      {onUpdate === true ? <OnUpdateBtnSet /> : <NotOnUpdateBtnSet />}
    </CommentBox>
  );
};

export default Comment;
