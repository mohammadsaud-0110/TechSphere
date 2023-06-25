import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../components/login";
import { HomePage } from "../components/home";
import { Register } from "../components/register";
import Quiz from "../components/quiz/Quiz";

const PrivateRoute = ({ element, isAuthenticated, fallbackPath }) => {
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={fallbackPath} replace />
  );
};

export const MainRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken"); // Check if access token exists

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/quiz"
        element={
          <PrivateRoute
            element={<Quiz />}
            isAuthenticated={isAuthenticated}
            fallbackPath="/login" // Redirect to the login page if not logged in
          />
        }
      />
    </Routes>
  );
};
