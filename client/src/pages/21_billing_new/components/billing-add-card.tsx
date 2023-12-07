import { useState } from "react";
import { Button, Card, CardBody, Input } from "@material-tailwind/react";

import DISCOVER from "../../../assets/17_billing/Discover.png";
import MASTER from "../../../assets/17_billing/Mastercard.png";
import VISA from "../../../assets/17_billing/Visa.png";

import { MdOutlineCancel } from "react-icons/md";

function Billingaddcard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="">
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody>
          <p className="text-[#000000] text-[18px] font-bold mb-4">
            Add Credit/Debit Cards
          </p>

          <div className="flex items-center gap-3 mb-4">
            <img src={VISA} alt="aad" className="object-contain w-[40px]" />
            <img src={MASTER} alt="aad" className="object-contain w-[40px]" />
            <img src={DISCOVER} alt="aad" className="object-contain w-[40px]" />
          </div>

          <p className="mb-1 text-[#353535]">Name on Card</p>
          <div className="w-full rounded-full bg-input_background mb-4">
            <Input
              type="email"
              placeholder="Name on Card"
              className="!border !border-gray-300 !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              crossOrigin=""
            />
          </div>

          <p className="mb-1 text-[#353535]">Card Number</p>
          <div className="w-full rounded-full bg-input_background mb-4">
            <Input
              type="email"
              placeholder="Card Number"
              className="!border !border-gray-300 !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              crossOrigin=""
            />
          </div>

          <div className="flex items-center justify-center justify-between">
            <div>
              <p className="text-[#353535] mb-1">MM/YY</p>
              <div className=" rounded-full bg-input_background !w-[9rem]">
                <Input
                  type="email"
                  placeholder="MM/YY"
                  className="!border !border-gray-300 w-full !w-[9rem] !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  crossOrigin=""
                />
              </div>
            </div>

            <div>
              <p className="text-[#353535] mb-1">CVV</p>
              <div className=" rounded-full bg-input_background !w-[9rem]">
                <Input
                  type="email"
                  placeholder="MM/YY"
                  className="!border !border-gray-300 !w-[9rem] !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  crossOrigin=""
                />
              </div>
            </div>
          </div>
        </CardBody>

        <div className="flex items-center justify-end p-4 mb-4">
          <Button className="w-36 rounded-full bg-primary normal-case">
            Save Card
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Billingaddcard;
