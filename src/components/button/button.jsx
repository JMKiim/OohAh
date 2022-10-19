import React from 'react';
import { Link } from 'react-router-dom';
import {
  DetailNavBtn,
  FeedUpdateBtn,
  CommentBtn,
  CommentSubmitBtn,
  PrevBtn,
  WriteBtn,
  FeedDelete,
} from './buttonStyle';

const Button = (props) => {
  switch (props.btnType) {
    case 'DetailNav':
      return (
        <Link to='/feeds'>
          <DetailNavBtn>{props.children}</DetailNavBtn>
        </Link>
      );
    case 'FeedUpdate':
      return <FeedUpdateBtn>{props.children}</FeedUpdateBtn>;
    case 'CommentSubmit':
      return (
        <CommentSubmitBtn disabled={props.disabled}>
          {props.children}
        </CommentSubmitBtn>
      );
    case 'Comment':
      return (
        <CommentBtn disabled={props.disabled} onClick={props.onClick}>
          {props.children}
        </CommentBtn>
      );
    case 'PrevBtn':
      return (
        <Link to='/'>
          <PrevBtn>{props.children}</PrevBtn>
        </Link>
      );
    case 'WriteBtn':
      return (
        <Link to='/add'>
          <WriteBtn>{props.children}</WriteBtn>
        </Link>
      );
    case 'FeedDelete':
      return <FeedDelete onClick={props.onClick}>{props.children}</FeedDelete>;
    default:
      return <button>{props.children}</button>;
  }
};

export default Button;
