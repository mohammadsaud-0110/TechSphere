import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/login";
import { HomePage } from "../components/home";
import { Register } from "../components/register";
import Quiz from "../components/quiz/Quiz";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};
