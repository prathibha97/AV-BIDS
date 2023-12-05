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
    </>
  );
}

export default Layout_02;
