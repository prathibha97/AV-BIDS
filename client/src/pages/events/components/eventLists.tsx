import { Button } from "@material-tailwind/react";

import EVENTS_01 from "../../../assets/09_events/events01.png";
import EVENTS_02 from "../../../assets/09_events/location.png";
import SAVE_ICON from "../../../assets/09_events/save-icon.png";

function eventLists() {
  return (
    <div className="mb-6">
      <div>
        <div className="flex items-center justify-center bg-[#fff] drop-shadow-lg gap-8 p-8 rounded-lg mx-4">
          <div>
            <div className="flex items-center gap-4">
              <div>
                <img src={EVENTS_01} alt="aad" className="w-[73px]" />
              </div>

              <div>
                <div className="flex items-center justify-end">
                  <h2 className="text-[18px] mb-1">
                    General Session & 4 Breakouts
                  </h2>
                </div>

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

            <div className="flex items-center gap-16 mt-4">
              {/* <div className="flex gap-1 items-center mb-1">
                <img
                  src={EVENTS_02}
                  alt="aad"
                  className="object-scale-down w-[20px]"
                />
                <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
              </div>

              <p className="text-[16px] mb-1">Corporate, General Meeting</p> */}

              <div className="flex gap-36">
                <p className="text-[16px] mb-1">
                  Event Date: 10/10/2023 - 10/15/2023
                </p>
                <p className="text-[16px] mb-1">$70,000 - $150,000</p>
              </div>
              <div className="bg-[#E4FFEA] rounded-full w-24 mb-4">
                <p className="text-[#178751] text-[14px] text-center font-semibold px-2 py-1">
                  In Person
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-end">
              <img src={SAVE_ICON} alt="aad" className="w-[23px]" />
            </div>

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
