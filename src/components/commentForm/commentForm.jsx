import React, { useEffect, useState } from 'react';
import {
  CommentFormBox,
  CommentFormFirstLine,
  UserNameInput,
  CommentContentInput,
  CommentSlogan,
} from './commentFormStyle';
import Button from '../button/button';
import useInput from '../../hooks/useInput';
import {
  __getCommentsAll,
  __addComment,
} from '../../redux/modules/commentsSlice';
import { useDispatch } from 'react-redux';

const CommentForm = ({ feedId }) => {
  const [nameInput, setNameInput, onChangeNameHandler] = useInput('');
  const [contentInput, setContentInput, onChangeContentHandler] = useInput('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [slogan, setSlogan] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCommentsAll());
  }, []);

  useEffect(() => {
    if (nameInput === '') {
      setIsDisabled(true);
      setSlogan('닉네임을 입력해주세요!');
    } else if (contentInput === '') {
      setIsDisabled(true);
      setSlogan('댓글도 입력해주세요!');
    } else {
      setIsDisabled(false);
      setSlogan('그리고 아름다운 댓글 문화로 아재의 품격을 보여주세요');
    }
  }, [nameInput, contentInput]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(`submit하러왔어요!`);
    dispatch(
      __addComment({
        feedId: parseInt(feedId),
        username: nameInput,
        content: contentInput,
      })
    );
    setNameInput('');
    setContentInput('');
  };

  return (
    <CommentFormBox onSubmit={onSubmitHandler}>
      <CommentFormFirstLine>
        <UserNameInput
          placeholder='닉네임 (10글자 제한)'
          onChange={onChangeNameHandler}
          value={nameInput}
          maxLength='10'
        />
        <CommentSlogan isRed={isDisabled}>{slogan}</CommentSlogan>
        <Button disabled={isDisabled} btnType='CommentSubmit'>
          등록
        </Button>
      </CommentFormFirstLine>

      <CommentContentInput
        placeholder='내용'
        onChange={onChangeContentHandler}
        value={contentInput}
      />
    </CommentFormBox>
  );
};

export default CommentForm;
