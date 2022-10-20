import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FeedsList from '../pages/FeedsList';
import Detail from '../pages/detail';
import Post from '../pages/Post';
import Update from '../pages/Update';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feeds' element={<FeedsList />} />
        <Route path='/feeds/:id' element={<Detail />} />
        <Route path='/post' element={<Post />} />
        <Route path='/update' element={<Update />} />
        <Route path='/update/:id' element={<Update />} />
        {/* <Route path='*' element={}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
