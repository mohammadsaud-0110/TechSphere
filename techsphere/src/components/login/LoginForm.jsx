import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [button, setButton] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    setButton(true);
    axios
      .post("https://techsphere-er21.onrender.com/user/login", loginData)
      .then((res) => {
        toast(res.data.msg);
        console.log(res.data);
        localStorage.setItem("accessToken", res.data["access Token"]);
        localStorage.setItem("userID", res.data.userID); // Store access token in localStorage
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        toast("Invalid Credentials");
        setButton(false);
      });
  };
  return (
    <div className="flex-1 mt-16 ">
      <div className=" w-8/12 m-auto">
        <div>
          <h2 className="text-white font-mono font-extrabold text-center text-3xl">
            Hello! <br />
            Welcome Back
          </h2>
        </div>
        <form onSubmit={handleLogin} className="mt-12">
          <div className="mb-5">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            type="password"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="mt-10 w-full inline-flex items-center justify-center">
            <button
              type="submit"
              class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative text-center">Sign In</span>
            </button>
          </div>
        </form>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-80 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-white" />
        </div>
      </div>
    </div>
  );
};
