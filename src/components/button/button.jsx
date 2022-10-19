import React from 'react';
import { Link } from 'react-router-dom';
import { DetailNavBtn, FeedUpdateBtn, CommentBtn,FeedPostBtn,HomeNavBtn,ListGo } from './buttonStyle';

const Button = (props) => {
  switch (props.btnType) {
    case 'DetailNav':
      return (
        <Link to='/list'>
          <DetailNavBtn>{props.children}</DetailNavBtn>
        </Link>
      );
    case 'FeedUpdate':
      return (
        <Link to ='/update'>
          <FeedUpdateBtn>{props.children}</FeedUpdateBtn>
        </Link>
        );
    case 'Comment':
      return (
        <CommentBtn disabled={props.disabled} onClick={props.onClick}>
          {props.children}
        </CommentBtn>
        );
    case 'FeedPost':
      return (
          <FeedPostBtn>{props.children}</FeedPostBtn>
        );
    case 'HomeNav':
      return (
        <Link to ='/'>
          <HomeNavBtn>{props.children}</HomeNavBtn>
        </Link>
        );
    case 'ListGo':
      return (
        <Link to ='/List'>
          <ListGo>{props.children}</ListGo>
        </Link>
        );
    default:
      return <button>{props.children}</button>;
  }
};

export default Button;
