import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import Update from "../pages/Update";
import Home from "../pages/Home";
import List from "../pages/List";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/post" element={<Post />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
