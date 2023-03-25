import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
