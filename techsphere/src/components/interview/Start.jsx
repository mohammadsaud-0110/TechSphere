import React from "react";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <div className="m-auto w-2/3 mt-16 ">
      <h1 className="font-extrabold text-transparent text-center text-5xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-700">
        Let's Begin: Step into the Interview Hot Seat and Showcase Your Skills!
      </h1>

      <div className="mt-20 text-center">
        <label
          for="countries_disabled"
          class="block mb-5 text-center text-xl font-medium text-gray-900 dark:text-white"
        >
          Select Your Track
        </label>
        <select
          required
          id="countries_disabled"
          class="bg-gray-50 border m-auto w-3/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select Your Track</option>
          <option value="MERN Stack Developer">MERN Stack Developer</option>
          <option value="Java backend developer">Java backend developer</option>
          <option value="Node Mongo Express Developer">
            Node Backend Developer
          </option>
        </select>
      </div>
      <Link to={"/questions"}>
        <button className="relative left-96  top-20 w-48 inline-flex items-center m-auto justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Get Started
          </span>
          <span className="relative invisible">Get Started</span>
        </button>
      </Link>
    </div>
  );
};
