import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import Update from "../pages/Update";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post" element={<Post />} />
        <Route path="/feeds" element={<Detail />} />
        <Route path="/feeds/:id" element={<Detail />} />
        <Route path="/update" element={<Update />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
