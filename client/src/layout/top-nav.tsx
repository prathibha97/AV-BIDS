import { Button, MobileNav, Navbar } from "@material-tailwind/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../app/features/user/userSlice";
import { useAppDispatch } from "../app/hooks";
import { useGetCurrentUser } from "../app/hooks/useUser";
import LOGO from "../assets/homepage/logo.png";
import Navbutton from "../assets/navigation bar/navbar_button.png";
import PLUS_ICON from "../assets/navigation bar/plus.png";
import ProfileMenu from "../components/profile-menu";
import api from "../utils/api";

export function TopNav() {
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleSignout = async () => {
    try {
      await api.post("/auth/logout");
      await dispatch(clearUser());
      // await dispatch(setStep(1));
      // await dispatch(clearAll());
      navigate("/");
      localStorage.removeItem("userInfo");
    } catch (error) {
      console.error(error);
    }
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/events">
        <p className="text-gray-600 font-medium text-center">Events Page</p>
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 shadow-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="flex items-center">
          <img src={LOGO} className="w-24" alt="AV Bids" />
        </Link>
        <div className="flex items-center gap-10">
          {user && user?.userType === "PLANNER" && (
            <Button
              variant="outlined"
              size="sm"
              className="hidden lg:block rounded-btn "
              onClick={() => navigate("/events/new")}
            >
              <div className="flex items-center gap-2">
                <img src={PLUS_ICON} alt="aad" className="object-contain" />
                <span className="text-black normal-case">Post New Event</span>
              </div>
            </Button>
          )}
          <div className="hidden lg:block">{navList}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-grow" />
          {!user ? (
            <>
              <Link to="/sign-in">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block text-btn"
                >
                  <span className="text-black normal-case">Login</span>
                </Button>
              </Link>

              <Link to="/sign-up">
                <Button
                  variant="outlined"
                  size="sm"
                  className="hidden lg:inline-block rounded-btn"
                >
                  <span className="text-black normal-case">Get Started</span>
                </Button>
              </Link>
            </>
          ) : (
            <ProfileMenu />
          )}
        </div>
        {/* <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-primary bg-[#000] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          <></>
        </IconButton> */}
        <img
          src={Navbutton}
          alt="navbar_toggle"
          className="h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {/* <div className='text-center'>{navList}</div> */}
          {!user && (
            <div className="grid grid-cols-2 gap-2 mb-0.5">
              <Link to="/sign-in">
                <Button
                  variant="outlined"
                  size="sm"
                  fullWidth
                  className="rounded-btn"
                >
                  <span className="text-black">Login</span>
                </Button>
              </Link>

              <Link to="/sign-up">
                <Button
                  variant="outlined"
                  size="sm"
                  fullWidth
                  className="rounded-btn"
                >
                  <span className="text-black">Get Started</span>
                </Button>
              </Link>
            </div>
          )}
          {user && (
            <div className="space-y-3">
              <Link to="/events">
                <Button
                  variant="outlined"
                  size="sm"
                  fullWidth
                  className="rounded-btn"
                >
                  <span className="text-black">View Events</span>
                </Button>
              </Link>
              <Button
                variant="outlined"
                size="sm"
                fullWidth
                className="rounded-btn"
                onClick={() => handleSignout()}
              >
                <span className="text-black">Logout</span>
              </Button>
            </div>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
}
