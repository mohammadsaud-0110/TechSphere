import React from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginImage } from "../login/LoginImage";

export const Register = () => {
  return (
    <div className="flex mix-h-screen gap-10">
      <LoginImage />
      <RegisterForm />
    </div>
  );
};
