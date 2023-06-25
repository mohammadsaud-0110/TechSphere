import React, { useState, useEffect } from "react";
import { Link,} from "react-router-dom";
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
        <Link to="/quiz" className="font-bold relative w-max two cursor-pointer">
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
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-bold rounded-lg group h-12"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-bold rounded-lg group h-12">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-lg hover:bg-white group h-12">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
