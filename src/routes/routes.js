import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import MovieIdPage from "../pages/MovieIdPage/MovieIdPage";
import MyList from "../pages/MyList/MyList";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Browse from "../pages/Browse/Browse";
import HomePage from "../pages/Main/Main";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<Browse />} />
        <Route path="/profiles" element={<Profile />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieIdPage />} />
        <Route path="/list" element={<MyList />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};
