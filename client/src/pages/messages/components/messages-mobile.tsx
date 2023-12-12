import { Avatar } from "@material-tailwind/react";
import { MdLens } from "react-icons/md";
import PROFILE_PHOTO from "../../../assets/14_messages/profile photo.jpg";
import SEND from "../../../assets/14_messages/send.png";
function Index() {
  return (
    <div className="container mx-auto">
      {/* Mobile view section starts here */}
      <section className="bg-white rounded-xl p-6  mx-2 mb-2 drop-shadow">
        <h2 className="text-xl font-semibold mb-6">Messages</h2>

        <div className="grid grid-cols-1">
          <div className="border-b border-[#EDECF1]">
            <div className="flex items-center gap-3 mb-6">
              <div className="self-start">
                <Avatar src={PROFILE_PHOTO} alt="avatar" size="sm" />
              </div>

              <div>
                <h2 className="text-[18px] font-semibold mb-1">Holden Cox</h2>
                <p className="mb-1">ACME AV</p>
                <p>Subject: AV Requirements</p>
              </div>
            </div>
          </div>

          <div className="mt-6 h-screen">
            <div className="flex items-center gap-3">
              <div className="self-start">
                <Avatar src={PROFILE_PHOTO} alt="avatar" size="sm" />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-[18px] font-semibold ">Holden Cox</h2>
                  <MdLens className="text-[#888888] text-[6px]" />
                  <p className="text-[#888888]">July 1, 2021</p>
                </div>

                <div className="ml-5 mt-3">
                  <div className="box sb2 m-0 p-0">
                    <p className="text-[#353535]">
                      Question about some of the av requirements listed on the
                      event detail page that did not show
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="mt-8">
                <div className="flex justify-end gap-3">
                  <div className="flex items-center gap-3">
                    <p className="text-[#888888]">July 1, 2021</p>
                    <MdLens className="text-[#888888] text-[6px]" />

                    <div>
                      <h2 className="text-[18px] font-semibold ">You</h2>
                    </div>
                  </div>
                  <div className="">
                    <Avatar src={PROFILE_PHOTO} alt="avatar" size="sm" />
                  </div>
                </div>

                <div className="box2 sb1 mt-2 mr-14 mb-6">
                  <p className="text-[#fff]">Thank You</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#EDECF1] pt-4">
            <p className="text-[#888888]">Write Your Message</p>
            <img src={SEND} alt="send" className="object-scale-down w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
