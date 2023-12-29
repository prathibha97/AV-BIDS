import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "../../app/hooks/useUser";
import subscribeRequired from "../../assets/17_billing/subscribe_to_us.png";

interface SubscriptionGuardProps {
  children: React.ReactNode;
}

const SubscriptionGuard: FC<SubscriptionGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  const user = useGetCurrentUser();

  const storedUser = JSON.parse(localStorage.getItem("userInfo") || "{}");

  // Check if the user has an active subscription with a plan of 'PREMIUM' or 'TRIAL'
  const hasSubscription =
    user?.subscription &&
    (user.subscription.plan === "PREMIUM" ||
      user.subscription.plan === "TRIAL");

  // Check if the userType is "PROVIDER"
  const isProvider = user?.userType === "PROVIDER";

  // Allow access without restrictions for planner users
  const isPlanner = user?.userType === "PLANNER";

  return isPlanner || (storedUser.token && isProvider && hasSubscription) ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="">
        {isProvider ? (
          <div className="bg-[#F3F1FB] py-12 px-48 rounded-2xl shadow-md">
            {/* "Subscription required. Please subscribe to access this content. " */}
            <div className="flex items-center justify-center ">
              <img
                src={subscribeRequired}
                alt="subscribe required img"
                className="w-[400px]"
              />
            </div>

            <h2 className="text-[#131e3e] text-center text-[40px] mb-3">
              Stay with us!
            </h2>
            <p className="text-[#33495c] text-center text-[16px]">
              Discover more! Subscribe for exclusive access <br></br>to premium
              content and elevate your <br></br>experience today.
            </p>

            <div className="flex items-center justify-center gap-10 mt-6">
              <div
                className="bg-[#8645FF] border border-[#8645FF] rounded-md cursor-pointer"
                onClick={() => navigate("/billing")}
              >
                <p className="text-[#f3f1fb] text-[18px] py-2 px-5">
                  Subscribe
                </p>
              </div>
              <div
                className="border border-[#8645FF] rounded-md cursor-pointer"
                onClick={() => navigate("/")}
              >
                <p className="text-[#8645ff] text-[18px] py-2 px-5">
                  No Thanks
                </p>
              </div>
            </div>
          </div>
        ) : (
          "Access restricted to PROVIDER users with an active subscription."
        )}
      </h2>
      {/* <button onClick={() => navigate("/billing")}>Subscribe</button> */}
    </div>
  );
};

export default SubscriptionGuard;
