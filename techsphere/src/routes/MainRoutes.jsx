import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/login";
import { HomePage } from "../components/home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
