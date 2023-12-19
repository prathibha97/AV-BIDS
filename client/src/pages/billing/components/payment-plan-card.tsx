import { Spinner } from "@material-tailwind/react";
import { FC, useState } from "react";
import {
  setPlan,
  setSubscription,
} from "../../../app/features/stripe/stripeSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useGetCurrentUser } from "../../../app/hooks/useUser";
import { StripePrice } from "../../../types";
import api from "../../../utils/api";

// new imports
import monthlyImg from "../../../assets/17_billing/month_img.png";
import yearlyImg from "../../../assets/17_billing/yearly_img.png";
import imgimg from "../../../assets/17_billing/pic002.png";
import { MdCheck } from "react-icons/md";

interface PaymentPlanCardProps {
  src: string;
  plan: StripePrice;
  price: number;
  priceId: string;
  onNext: () => void;
}

const PaymentPlanCard: FC<PaymentPlanCardProps> = ({
  src,
  plan,
  price,
  onNext,
  priceId,
}) => {
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const createSubscription = async () => {
    setLoading(true);
    try {
      const { data } = await api.post("/stripe/create-subscription", {
        priceId,
        email: user?.email,
      });
      dispatch(setSubscription(data));
      dispatch(setPlan(plan));
      onNext();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-[#fff] border border-[#8645ff] rounded-md w-max px-12 mt-16">
        <div className="">
          <div className="flex items-center justify-center">
            <img src={src} alt="card-pic" className="object-scale-down my-8" />
          </div>

          <div className="border-b border-[#C0C0C0]">
            <p className="mb-1 text-center">
              <span className="font-semibold text-[18px] text-primary_font_color text-center">
                ${price}
              </span>
              / {plan.recurring.interval === "year" ? "yearly" : "monthly"}
            </p>

            <p className="text-[#828b9b] mb-2 text-center">
              {plan.product.name}
            </p>
          </div>

          <div className="grid grid-cols-1 mt-6">
            <div className="flex gap-2">
              <MdCheck className="text-[20px] text-[#33da98] " />
              <p className="text-primary_font_color mb-2">
                Swift Proposal Submission
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex gap-2">
              <MdCheck className="text-[20px] text-[#33da98] " />
              <p className="text-primary_font_color mb-2">
                Effortless Team Collaboration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="flex gap-2">
              <MdCheck className="text-[20px] text-[#33da98] " />
              <p className="text-primary_font_color mb-2">
                Seamless Event Management Hub
              </p>
            </div>
          </div>

          {/* <div
            className="bg-[#8645ff] w-max text-[#fff] font-medium px-5 py-1.5 rounded-2xl mb-8 cursor-pointer"
            onClick={() => createSubscription()}
          >
            <div className="flex items-center">
              {loading && <Spinner className="h-4 w-4 mr-2" />}
              <span>Subscribe</span>
            </div>
          </div> */}

          <div
            className="flex items-center jusitfy-center"
            onClick={() => createSubscription()}
          >
            <div className="w-full  border-solid border-2 border-[#8645ff] bg-[#8645ff] hover:bg-[#752dfb] hover:text-white cursor-pointer mt-4 mb-10">
              <div className="flex items-center justify-center">
                {loading && <Spinner className="h-4 w-4 mr-2 " />}
                <p className="text-[#fff] text-[18px] text-center px-4 py-2 hover:text-white">
                  Subscribe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
