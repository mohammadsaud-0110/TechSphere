import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsertoken = localStorage.getItem("accessToken");
    if (storedUsertoken) {
      setToken({ userToken: storedUsertoken });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="flex justify-evenly py-5 items-center">
      <div>
        <Link to="/">
          <img src="assets/logo.png" alt="Logo" className="w-60" />
        </Link>
      </div>
      <div className="text-white flex gap-10 p-5">
        <Link to="/" className="font-bold relative w-max two cursor-pointer">
          <span>Home</span>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
        <p className="font-bold relative w-max two cursor-pointer">
          <span>Chat</span>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </p>
        <Link
          to="/start_Interview"
          className="font-bold relative w-max two cursor-pointer"
        >
          <span>Video Interview</span>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </Link>
        <p className="font-bold relative w-max two cursor-pointer">
          <span>Your Interviews</span>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
        </p>
      </div>
      <div className="flex gap-5 items-center">
        {token ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src="https://www.odpsolutions.com/wp-content/uploads/2020/11/person-icon-blue.gif"
                alt="User Icon"
                className="w-12 h-12 rounded-full"
              />
              {/* <span className="text-white">{user.username}</span> */}
            </div>

            <button
              onClick={handleLogout}
              className="relative inline-flex  items-center justify-start px-6 py-2 overflow-hidden font-bold  rounded-lg group h-12"
            >
              <span className="w-32 h-32 rotate-10 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Logout
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="relative inline-flex  items-center justify-start px-6 py-2 overflow-hidden font-bold  rounded-lg group h-12">
                <span className="w-32 h-32 rotate-10 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Login
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
              </button>
            </Link>
            <Link to="/register">
              <button className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-lg hover:bg-white group h-12">
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  Register
                </span>
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

// export const Navbar = () => {
//   return (
//     <nav className="flex justify-evenly py-5 items-center">
//       <div>
//         <Link to={"/"}>
//           <img src="assets/logo.png" alt="Logo" className="w-60" />
//         </Link>
//       </div>
//       <div className="text-white flex gap-10 p-5">
//         <Link to={"/"} className="font-bold  relative w-max two cursor-pointer">
//           <span>Home</span>
//           <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
//           <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
//         </Link>
//         <Link
//           to="/chat"
//           className="font-bold  relative w-max two cursor-pointer"
//         >
//           <span>Chat</span>
//           <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
//           <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
//         </Link>
//         <Link
//           to="/start_Interview"
//           className="font-bold  relative w-max two cursor-pointer"
//         >
//           <span>Video Interview</span>
//           <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
//           <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
//         </Link>
//         <p className="font-bold  relative w-max two cursor-pointer">
//           <span>Your Interviews</span>
//           <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400 hover:w-9"></span>
//           <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
//         </p>
//       </div>
//       <div className="flex gap-5 items-center">
//         <Link to="/login">
//           <button className="relative inline-flex  items-center justify-start px-6 py-2 overflow-hidden font-bold  rounded-lg group h-12">
//             <span className="w-32 h-32 rotate-10 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
//             <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
//             <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
//               Login
//             </span>
//             <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
//           </button>
//         </Link>
//         <Link to="/register">
//           <button className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-lg hover:bg-white group h-12">
//             <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
//             <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
//               Register
//             </span>
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };
