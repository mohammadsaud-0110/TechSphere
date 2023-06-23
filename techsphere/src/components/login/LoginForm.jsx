import React from "react";

export const LoginForm = () => {
  return (
    <div className="flex-1 mt-16 ">
      <div className=" w-2/4 m-auto">
        <div>
          <h2 className="text-white font-mono font-extrabold text-center text-3xl">
            Hello! <br />
            Welcome Back
          </h2>
        </div>
        <form action="" className="mt-12">
          <div className="mb-5">
            <label
              for="input-group-1"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>

            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
            />
          </div>
          <label
            for="input-group-1"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-3xl flex items-center"
            placeholder="..........."
          />
          <div className="mt-10 w-full inline-flex items-center justify-center">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative text-center">Sign In</span>
            </a>
          </div>
        </form>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-80 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-white" />
        </div>
      </div>
    </div>
  );
};
