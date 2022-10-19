import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FeedsList from '../pages/FeedsList';
import Detail from '../pages/detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feeds' element={<FeedsList />} />
        <Route path='/feeds/:id' element={<Detail />} />
        {/* <Route path='*' element={}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
