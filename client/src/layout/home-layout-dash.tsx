import { Outlet } from "react-router-dom";
import { NavbarDashboard } from "./NavbarDashboard";
import { Sidebar_dashboard } from "./Sidebar_dashboard";

function HomeLayout() {
  return (
    <>
      <main className="w-full h-screen overflow-auto bg-[#f7f6fd]">
        <NavbarDashboard />
        <div className="flex">
          <Sidebar_dashboard />
          <Outlet />
        </div>
      </main>
      {/* <div className="w-full h-screen bg-gray-100 overflow-y-auto style-scroll">

      <div className="min-h-screen flex flex-col pt-20 ">
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
  
    </div> */}
    </>
  );
}

export default HomeLayout;
