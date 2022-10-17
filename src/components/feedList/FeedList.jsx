import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getFeeds, __deleteFeeds } from '../../redux/modules/feedsSlice'
import Button from '../button/button'
import { SFeedList, STop, SLink, Sicon, TextType } from './FeedListStyle'


const FeedList = () => {
  const dispatch = useDispatch();
  const { feeds } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(__getFeeds())
  }, [dispatch])

  return (

    <div>
      <STop>
        <h1>유머리스트</h1>
        <Button btnType='PrevBtn'>이전으로</Button>
      </STop>
      {feeds.map((feed) =>

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
    </div>

  )
}

export default FeedList;