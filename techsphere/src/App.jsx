import "./App.css";
import { Navbar } from "./layout/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div className="gradient__bg">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
