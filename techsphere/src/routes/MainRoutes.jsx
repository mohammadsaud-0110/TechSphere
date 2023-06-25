import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../components/login";
import { HomePage } from "../components/home";
import { Register } from "../components/register";
import Quiz from "../components/quiz/Quiz";
import { Questions } from "../components/question";
import { Start_Interview } from "../components/interview";

const PrivateRoute = ({ element, isAuthenticated, fallbackPath }) => {
  return isAuthenticated ? element : <Navigate to={fallbackPath} replace />;
};

export const MainRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/quiz" element={<Quiz />} /> */}
      <Route
        path="/start_Interview"
        element={
          <PrivateRoute
            element={<Start_Interview />}
            isAuthenticated={isAuthenticated}
            fallbackPath="/login"
          />
        }
      />
      <Route
        path="/questions"
        element={
          <PrivateRoute
            element={<Questions />}
            isAuthenticated={isAuthenticated}
            fallbackPath="/login"
          />
        }
      />
    </Routes>
  );
};
