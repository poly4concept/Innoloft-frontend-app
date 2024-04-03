import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-5 px-[9%] mt-5">
        <div className="hidden lg:block col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
