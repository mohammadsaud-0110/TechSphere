import React from "react";
import { LoginImage } from "./LoginImage";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <div className="flex mix-h-screen gap-10">
      <LoginImage />
      <LoginForm />
    </div>
  );
};
