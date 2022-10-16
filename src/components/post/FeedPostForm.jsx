import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import Button from "../button/button"
import axios from "axios";

import {
  PostSection,
  PostForm,
  PostText,
  PostInput,
  ButtonGroup,
} from './FeedPostFormStyle';

const FeedPostForm = () => {

  const navigate = useNavigate();
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();
  const [useName, onChangeUserNameHandler] = useInput();

  const initialState = {
    id: 0,
    title: "",
    body: "",
    useName: "",
  }

  const [feed, setFeed] = useState(initialState)

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    if (
      useName.trim() === "" ||
      title.trim() === "" ||
      body.trim() === ""
    ) {
      return alert("모든 항목을 입력해 주세요!")
    }
    axios.post("http://localhost:3001/feeds", {...feed, useName:useName,body:body,title:title});
    setFeed(initialState);
    navigate('/List')
  }

  return (
    <PostSection>
      <PostForm onSubmit={onSubmitHandler}>
      <h2>작성자</h2>
      <PostInput
        type="text"
        name="useName"
        value={useName}
        maxLength={5}
        placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
        onChange={onChangeUserNameHandler}
      />
      <h2>오늘의 아재개그</h2>
      <PostInput
        type="text"
        name="title"
        value={title}
        maxLength={20}
        placeholder="개그를 입력해주세요. (30자 이내)"
        onChange={onChangeTitleHandler}
      />
      <h2>설명</h2>
      <PostText
        name="body"
        rows="6"
        maxLength={100}
        value={body}
        placeholder="설명을 입력해주세요. (100자 이내)"
        onChange={onChangeBodyHandler}
      />
      <ButtonGroup>
        <Button btnType='FeedPost'>등록</Button>
        <Button btnType='HomeNav'>이전으로</Button>
      </ButtonGroup>
      </PostForm>
    </PostSection>
  );
};

export default FeedPostForm