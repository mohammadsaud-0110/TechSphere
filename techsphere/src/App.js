import { ToastContainer } from "react-toastify";
import "./App.css";
import { Navbar } from "./layout/Navbar";
import { MainRoutes } from "./routes/MainRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="gradient__bg">
      <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      <MainRoutes />
    </div>
  );
}

export default App;
