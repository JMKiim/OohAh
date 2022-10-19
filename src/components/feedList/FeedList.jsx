import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getFeeds, __deleteFeeds } from '../../redux/modules/feedsSlice'
import Button from '../button/button'
import {
  SFeedList,
  STop,
  SLink,
  Sicon,
  TextType,
  PageUl,
  PageLi,
  PageSpan
} from './FeedListStyle'

const FeedList = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const dispatch = useDispatch()
  const { feeds } = useSelector((state) => state.feeds)

  useEffect(() => {
    dispatch(__getFeeds());
  }, [dispatch])


  // useEffect는 파라메터를 2개 받는다.
  // 첫번째는 수행될 함수, 두번째는 상태
  // 동작은, 두번째 요소 상태변수가 변경되면, 함수가 호출된다.
  // history는 페이지 이동정보를 갖고있다.
  // history가 변경되면, 아래 함수가 호출될텐데,
  // 이 동작이 dispatch(__getFeeds()) 용으로 사용할 수 있는지 점검해보자.
  // useEffect(() => {
  //   console.log(window.history)
  // }, [window.history])


  // const indexOfLast = currentPage * postsPerPage

  // pageNumbers는 화면에 출력할 페이지 번호을 저장
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(feeds.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <STop>
        <h1>유머리스트</h1>
        <div>
          <Button btnType='WriteBtn'>추가하기</Button>
          <Button btnType='PrevBtn'>이전으로</Button>
        </div>
      </STop>
      {feeds.slice((currentPage * postsPerPage) - postsPerPage, currentPage * postsPerPage).map((feed) =>
        <SFeedList key={feed.id}>
          <SLink to={`/feeds/${feed.id}`} >
            <div>
              <TextType>{feed.title}</TextType>
              <p>작성자 : {feed.username}</p>
            </div>
          </SLink>

          <div>
            <Button btnType='FeedDelete' onClick={() => {
              const confirm = window.confirm('진짜로 지울까요?')
              if (confirm) {
                dispatch(__deleteFeeds(feed.id))
              } else {
                return
              }
            }}>
              <Sicon className="fa-solid fa-trash"></Sicon></Button>
          </div>
        </SFeedList>
      )}

      {/* 저장된 pageNumbers를 map을 사용하여 화면에 뿌려준다. */}
      <div>
        <nav>
          <PageUl>
            {pageNumbers.map((number) => (
              <PageLi key={number} onClick={() => setCurrentPage(number)}>
                {/* setCurrentPage가 호출되면 화면이 렌더링됨 */}
                <PageSpan>
                  {number}
                </PageSpan>
              </PageLi>
            ))}
          </PageUl>
        </nav>
      </div>
    </div >
  )
}
export default FeedList