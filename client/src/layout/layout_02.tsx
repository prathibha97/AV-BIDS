import { Outlet } from "react-router-dom";
import { NavbarDashboard } from "./NavbarDashboard";
import { Footer } from "./footer";

function Layout_02() {
  return (
    <>
      <main className="w-full h-screen overflow-auto bg-[#fff]">
        <NavbarDashboard />
        <Outlet />
        <Footer />
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

export default Layout_02;
