import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postFeed, __updateFeed, __updateViewFeed } from "../../redux/modules/PostSlice";
import useInput from "../../hooks/useInput";
import Button from "../button/button"
import axios from "axios";

import {
  PostSection,
  PostForm,
  PostText2,
  PostInput,
  ButtonGroup
} from '../post/FeedPostFormStyle';

const FeedUpdateForm = () => {

  useEffect(() => {
    dispatch(__updateViewFeed({...feed, id:param.id}));
  }, []);

  const ViewUpdate = useSelector((state) => state.post.feed);
  const ViewLoading = useSelector((state) => state.post.isLoading);
  //console.log(ViewUpdate.title);
  //console.log(ViewUpdate.body);
  console.log(ViewUpdate)

  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [title, setTitle, onChangeTitleHandler] = useInput(ViewUpdate.title);
  const [body, setBody, onChangeBodyHandler] = useInput(ViewUpdate.body);
  const [feed, setFeed] = useState([]);

 
  const onSubmitHandler = (event)=> {
    event.preventDefault();
    if (title.trim() === "") {
      alert("개그를 입력해 주세요!");
      return
    }
    if (body.trim() === "") {
      alert("설명을 입력해 주세요!");
      return 
    }
    dispatch(__updateFeed({...feed, body:body, title:title, id:param.id}));
    // id값 넘겨주기
    setFeed(null);
    navigate(`/detail/:${param.id}`)
  }

  if (ViewLoading) return

  return (
    <PostSection>
      <PostForm onSubmit={onSubmitHandler}>
      <h2>개그 수정</h2>
      <PostInput
        type="text"
        name="title"
        value={title}
        maxLength={20}
        placeholder="개그를 수정해주세요. (30자 이내)"
        onChange={onChangeTitleHandler}
      />
      <h2>아재개그 설명</h2>
      <PostText2
        name="body"
        rows="6"
        maxLength={100}
        value={body}
        placeholder="설명을 수정해주세요. (100자 이내)"
        onChange={onChangeBodyHandler}
      />
      <ButtonGroup>
        <Button btnType='FeedPost'>수정</Button>
        <Button btnType='ListGo'>이전으로</Button>
      </ButtonGroup>
      </PostForm>
    </PostSection>
  );
};

export default FeedUpdateForm