import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <div className="max-w-xl mx-auto m-6">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
