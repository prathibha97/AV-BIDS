import React from "react";

import { Avatar, Textarea } from "@material-tailwind/react";

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
              <div>
                <div className="border-b  border-[#EDECF1] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900"
                        src={PROFILE_PHOTO}
                      />

                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">
                          Holden Cox
                        </h2>
                        <p>Subject: AV Requirements</p>
                      </div>
                    </div>

                    <p>May 9</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b  border-[#EDECF1] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900"
                        src={PROFILE_PHOTO}
                      />

                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">
                          Holden Cox
                        </h2>
                        <p>Subject: AV Requirements</p>
                      </div>
                    </div>

                    <p>May 9</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b  border-[#EDECF1] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900"
                        src={PROFILE_PHOTO}
                      />

                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">
                          Holden Cox
                        </h2>
                        <p>Subject: AV Requirements</p>
                      </div>
                    </div>

                    <p>May 9</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b  border-[#EDECF1] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900"
                        src={PROFILE_PHOTO}
                      />

                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">
                          Holden Cox
                        </h2>
                        <p>Subject: AV Requirements</p>
                      </div>
                    </div>

                    <p>May 9</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b  border-[#EDECF1] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900"
                        src={PROFILE_PHOTO}
                      />

                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">
                          Holden Cox
                        </h2>
                        <p>Subject: AV Requirements</p>
                      </div>
                    </div>

                    <p>May 9</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900"
                        src={PROFILE_PHOTO}
                      />

                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold">
                          Holden Cox
                        </h2>
                        <p>Subject: AV Requirements</p>
                      </div>
                    </div>

                    <p>May 9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="grid grid-rows-7 h-full">
              <div className="border-b border-[#EDECF1] row-span-1 p-4 ">
                <div className="flex items-center gap-4">
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border border-gray-900"
                    src={PROFILE_PHOTO}
                  />

                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                    <p>ACME AV</p>
                    <p>Subject: AV Requirements</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#EDECF1] row-span-5 p-4">
                <div className="flex items-center gap-3">
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border border-gray-900 self-start"
                    src={PROFILE_PHOTO}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                      <p className="text-[#888888]">July 1, 2021</p>
                    </div>

                    <div className="bg-[#F3F1FB] p-4 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md">
                      <p>
                        Question about some of the av requirements listed on the
                        event detail page that did not show
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6 justify-end">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[#888888] text-right">July 1, 2021</p>
                      <p className="text-right">You</p>
                    </div>

                    <p className="bg-[#8645FF] p-4 rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-md text-right w-max mt-1 text-white">
                      Thank you
                    </p>
                  </div>

                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border border-gray-900 p-0.5 self-start"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                </div>

                <div className="flex justify-end mt-2"></div>
              </div>

              <div className="row-span-1">
                <div className="p-4 flex items-center">
                  <Textarea
                    label="Write Your Message"
                    className="border-none"
                  />

                  <img
                    src={SEND}
                    alt="aad"
                    className="object-scale-down w-[67px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
