import React from "react";
import { Button } from "@material-tailwind/react";

import {
  Card,
  Typography,
  Select,
  Option,
  Avatar,
  Textarea,
} from "@material-tailwind/react";

import REFRESH_ICON from "../../assets/14_messages/refresh.png";
import PROFILE_PHOTO from "../../assets/14_messages/profile photo.jpg";
import SEND from "../../assets/14_messages/send.png";

function index() {
  return (
    // <div>event_planner</div>
    <div className="container mx-auto">
      <section className="bg-white rounded-xl p-6">
        <h2 className="text-[20px] font-semibold mb-6">Message</h2>

        <div className="grid grid-cols-3 border border-[#EDECF1] rounded-xl">
          <div className="border-r border-[#EDECF1]">
            <div className="grid grid-rows-7 gap-4">
              <div className="border-b  border-[#EDECF1] p-4">
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
              </div>
            </div>
          </div>

          <div className="col-span-2"></div>
        </div>
      </section>
    </div>
  );
}

export default index;
