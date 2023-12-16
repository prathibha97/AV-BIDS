import LOGO from "../../../assets/register/logo.png";

import {
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "../../../app/hooks/useUser";
import AlertBox from "../../../components/alert-box";
import PlannerAccountForm from "./components/planner-account";
import ProviderAccountForm from "./components/provider-account";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("PLANNER");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const user = useGetCurrentUser();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      <AlertBox
        color="red"
        variant="ghost"
        text={errorMessage!}
        open={open}
        setOpen={setOpen}
      />
      <div className="flex items-center justify-center h-screen bg-[#f3f1fb]">
        <div className="">
          <div className="flex items-center justify-center mb-6">
            <Link to="/">
              <img
                src={LOGO}
                alt="AV Bids Logo"
                className=" w-[150px] object-contain"
              />
            </Link>
          </div>
          <Card className="m-4 sm:mb-0 sm:w-[25rem]">
            <CardHeader
              color="white"
              floated={false}
              shadow={false}
              className="m-0 grid place-items-center px-4 pt-8 pb-0 text-center"
            >
              <h2 className="text-[30] text-primary">Create Account</h2>
            </CardHeader>
            <CardBody>
              <Tabs value={userType} className="overflow-visible">
                <TabsHeader className="relative z-0 border border-[#E0E0E0] bg-purple_two ">
                  <Tab
                    value="PLANNER"
                    onClick={() => {
                      setUserType("PLANNER");
                    }}
                  >
                    <div className="flex items-center my-1">
                      <h2 className="text-[16px] text-center">Event Planner</h2>
                    </div>
                  </Tab>
                  <Tab
                    value="PROVIDER"
                    onClick={() => {
                      setUserType("PROVIDER");
                    }}
                  >
                    <div className="flex items-center my-1">
                      <h2 className="text-[16px] text-center">AV Provider</h2>
                    </div>
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="!overflow-x-hidden !overflow-y-visible "
                  animate={{
                    initial: {
                      x: userType === "PLANNER" ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: userType === "PLANNER" ? 400 : -400,
                    },
                  }}
                >
                  <TabPanel value="PLANNER" className="p-0 ">
                    <PlannerAccountForm
                      userType={userType}
                      setErrorMessage={setErrorMessage}
                      setOpen={setOpen}
                    />
                  </TabPanel>
                  <TabPanel value="PROVIDER" className="p-0">
                    <ProviderAccountForm
                      userType={userType}
                      setErrorMessage={setErrorMessage}
                      setOpen={setOpen}
                    />
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
