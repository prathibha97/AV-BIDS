import React from "react";
import Subscribed from "../../../assets/17_billing/subscribed.png";
import { Button } from "@material-tailwind/react";
interface Page04Props {
  onPrev: () => void;
}

const Page04: React.FC<Page04Props> = ({ onPrev }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Page 4</h1>

      <div className="">
        <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
          <p className="text-[#29a56f] text-[35px] text-center mb-4">
            Success!
          </p>

          <div className="flex items-center justify-center">
            <img
              src={Subscribed}
              alt="aad"
              className="object-scale-down mb-8"
            />
          </div>

          <p className="text-[#8645ff] text-[35px] text-center">
            Your are now Subscribed!
          </p>
        </section>
      </div>

      <Button onClick={onPrev} className="bg-primary normal-case">
        Previous
      </Button>
    </div>
  );
};

export default Page04;
