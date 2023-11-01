import React from "react";

import REFRESH_ICON from "../../assets/14_messages/refresh.png";
import EMPTY_MESSAGE from "../../assets/14_messages_empty/messages-empty.png";

function index() {
  return (
    // <div>event_planner</div>
    <div className="container mx-auto">
      <section className="bg-white rounded-xl p-6">
        <h2 className="text-[20px] font-semibold mb-6">Message</h2>

        <div className="grid grid-cols-3 border border-[#EDECF1] rounded-xl">
          <div className="col-span-1 border-r border-[#EDECF1]">
            <div className="">
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <p>All</p>
                    <p>Unread (1)</p>
                  </div>

                  <img
                    src={REFRESH_ICON}
                    alt="aad"
                    className="object-contain W-[16px]"
                  />
                </div>
                <div className="flex items-center justify-center mt-4">
                  <h2 className="text-[17px] font-semibold">
                    You have no messages
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 h-[600px] flex items-center justify-center">
            <div>
              <div className="flex items-center justify-center mb-3">
                <img
                  src={EMPTY_MESSAGE}
                  alt="aad"
                  className="object-contain W-[90px]"
                />
              </div>

              <h2 className="font-semibold text-[22px] text-center mb-3">
                Welcome to messages
              </h2>
              <p className="text-center">
                when an av provider needs more information, it will show up here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
