import {
  Card,
  Checkbox,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";

import EVENTS_01 from "../../../assets/09_events/events01.png";
import EVENTS_02 from "../../../assets/09_events/location.png";

export function index() {
  return (
    <div>
      <div className="w-full gap-8 mb-6">
        <div>
          <div className="flex items-center justify-between bg-[#F3F1FB] drop-shadow gap-8 p-8 rounded-lg w-full">
            <div>
              <img
                src={EVENTS_01}
                alt="aad"
                className="object-scale-down w-[73px]"
              />
            </div>

            <div>
              <h2 className="text-[20px]">General Session & 4 Breakouts</h2>

              <div className="flex gap-36">
                <p className="text-[18px]">
                  Event Date: 10/10/2023 - 10/15/2023
                </p>
                <p className="text-[18px]">$70,000 - $150,000</p>
              </div>

              <div className="flex items-center gap-16 mt-4">
                <div className="flex gap-8 items-center">
                  <img
                    src={EVENTS_02}
                    alt="aad"
                    className="object-scale-down w-[20px]"
                  />
                  <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
                </div>

                <p className="text-[16px]">Corporate, General Meeting</p>
                <Button
                  variant="filled"
                  color="green"
                  size="sm"
                  className="rounded-full w-30 py-2 px-3 bg-[#B5F9C4] font-poppins"
                >
                  <h2 className="text-[#178751] text-[12px]">Virtual</h2>
                </Button>
              </div>
            </div>

            <div className="ml-24">
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins"
              >
                <span className="text-white">Apply Now</span>
              </Button>
              <p className="text-[16px] mt-4">23 days left to apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
