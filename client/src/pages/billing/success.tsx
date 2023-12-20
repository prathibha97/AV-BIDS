import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { useGetCurrentUser } from "../../app/hooks/useUser";
import Subscribed from "../../assets/17_billing/subscribed.png";
import Success_img from "../../assets/17_billing/success_page.png";
import api from "../../utils/api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUser } from "../../app/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { clearAll } from "../../app/features/stripe/stripeSlice";

interface SuccessPageProps {}

const SuccessPage: React.FC<SuccessPageProps> = () => {
  const [loading, setLoading] = useState(false);
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const subscriptionId = useAppSelector(
    (state: RootState) => state.stripe?.subscription?.subscriptionId
  );

  const productId = useAppSelector(
    (state: RootState) => state.stripe?.plan?.product?.id
  );

  const priceId = useAppSelector((state: RootState) => state.stripe?.plan?.id);

  const updateUserSubscription = async () => {
    setLoading(true);
    try {
      const { data } = await api.put(`/users/${user?._id}`, {
        subscription: {
          plan: "PREMIUM",
          startDate: new Date(),
          subscriptionId,
          productId,
          priceId,
          customerId: user?.subscription.customerId,
        },
      });
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      dispatch(setUser(data.user));
      dispatch(clearAll());
      navigate("/billing");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto w-max">
      <div className="flex items-center justify-center h-screen">
        <section className="bg-[#f7f3f0] border-2 border-[#427768] pt-16">
          <h5 className="text-[#3a7561] text-[60px] text-center mb-4 font-abv text-abv">
            Thank You For Subscribing!
          </h5>

          <p className="text-[#535550] text-center">
            Cheers on starting your AV Bids journey! Click 'Continue' to unlock
            <br></br>
            an exciting world of possibilities in the next chapter!
          </p>

          <div className="flex justify-center mt-5 ">
            <div
              className="bg-[#3a7561] text-[18px] py-2 px-5 w-max rounded-lg text-white cursor-pointer"
              onClick={() => updateUserSubscription()}
            >
              <div className="flex items-center gap-1 ">
                {loading && <Spinner className="mr-3 h-4 w-4" />}
                <p>Continue</p>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <img
              src={Subscribed}
              alt="aad"
              className="object-scale-down mb-8"
            />
          </div> */}

          {/* <p className="text-[#8645ff] text-[35px] text-center">
            You are now Subscribed!
          </p> */}

          {/* <h5 className="text-[35px]">heloooooooooooooooooooo</h5> */}

          {/* <Button
            onClick={() => updateUserSubscription()}
            className="bg-primary normal-case"
          >
            <div className="flex items-center">
              {loading && <Spinner className="mr-3 h-4 w-4" />}
              Click to continue
            </div>
          </Button> */}

          <div className="">
            <img
              src={Success_img}
              alt="aad"
              className="object-scale-down w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessPage;
