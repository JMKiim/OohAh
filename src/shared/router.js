import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/feeds/:id' element={<Detail />} />
        {/* <Route path='*' element={}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
