import { Button } from "@material-tailwind/react";

import EVENTS_01 from "../../../assets/09_events/events01.png";
import EVENTS_02 from "../../../assets/09_events/location.png";

function eventLists() {
  return (
    <div className="mb-6">
      <div>
        {/* sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 */}
        <div className="flexx items-center justify-center bg-[#fff] drop-shadow-lg gap-8 p-8 rounded-lg mx-4">
          <div>
            <div className="flex items-center gap-4">
              <div>
                <img src={EVENTS_01} alt="aad" className="w-[73px]" />
              </div>

              <div>
                <h2 className="text-[18px] mb-1">
                  General Session & 4 Breakouts
                </h2>

                {/* <div className="flexx gap-36">
                  <p className="text-[16px] mb-1">
                    Event Date: 10/10/2023 - 10/15/2023
                  </p>
                  <p className="text-[16px]">$70,000 - $150,000</p>
                </div> */}

                <div className="flex gap-1 items-center mb-1">
                  <img
                    src={EVENTS_02}
                    alt="aad"
                    className="object-scale-down w-[20px]"
                  />
                  <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
                </div>

                <p className="text-[16px] mb-1">Corporate, General Meeting</p>
              </div>
            </div>

            <div className="flexx items-center gap-16 mt-4">
              {/* <div className="flex gap-1 items-center mb-1">
                <img
                  src={EVENTS_02}
                  alt="aad"
                  className="object-scale-down w-[20px]"
                />
                <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
              </div>

              <p className="text-[16px] mb-1">Corporate, General Meeting</p> */}

              <div className="flexx gap-36">
                <p className="text-[16px] mb-1">
                  Event Date: 10/10/2023 - 10/15/2023
                </p>
                <p className="text-[16px] mb-1">$70,000 - $150,000</p>
              </div>
              <Button
                variant="filled"
                color="green"
                size="sm"
                className="rounded-full w-30 py-1 px-3 bg-[#B5F9C4] font-poppins mb-2"
              >
                <h2 className="text-[#178751] text-[12px] text-center">
                  Virtual
                </h2>
              </Button>
            </div>
          </div>

          <div className="">
            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins w-full"
            >
              <span className="text-white normal-case">Apply Now</span>
            </Button>
            <p className="text-[16px] mt-4 text-center">
              23 days left to apply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eventLists;
